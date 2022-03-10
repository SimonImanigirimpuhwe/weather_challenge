import { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
import { Layout } from "./components/Layout";
import { Search } from "./components/Search";
import { Box, Text } from "@chakra-ui/react";
import { WeatherCard } from "./components/Card";
import { Empty } from "./components/Empty";
import { convertToCelicius } from "./libs/convertToCelcius";

const SERVER_URL= "http://localhost:5000/api";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [weather, setWeather] = useState({});
  const [weatherErr, setWeatherErr] = useState(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isSunrise, setIsSunrise] = useState(true);

  const onSearch = ({target}) => {
    const {value} = target;
    setSearchTerm(value);
  }
  
  const handleSearch = (e) => {
    e.preventDefault();
    const axiosConfig = {
      method: "POST",
      data: {country: searchTerm},
      url: `${SERVER_URL}/weather`
    }
    setIsSearching(true);
    setWeatherErr("")
    axios(axiosConfig)
    .then((result) => {
      setIsSearching(false);
      setIsEmpty(false)
      setSearchTerm("");
      setWeather(result.data.data)
    })
    .catch((err) => {
      setWeather({});
      setWeatherErr(err.message);
      setIsSearching(false);
      setIsEmpty(false);
      setIsSunrise(true)
    })
  }
  const getCurrentTime = () => {
    const day = new Date();
    const hours = day.getHours();
    const minutes = day.getMinutes();

    return hours + ":" + minutes
  }

  const currentTime  = getCurrentTime();

  useEffect(() => {
    if (weather && weather.main) {
      setIsSunrise(convertToCelicius(+weather.main.temp) < 20 ? false : true)
    }
  },[weather]);

  return (
    <Layout ftPos={ weather && weather.main ? "mt-0": "mt-78"} isEmpty={isEmpty} isSunrise={isSunrise}>
      <Search 
        onSearch={onSearch}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        isSearching={isSearching}
      />
      <Box>
        {weatherErr && <Text textAlign="center" mt={10} color="red.400" bg="whiteAlpha.800" borderRadius="md">{weatherErr}</Text>}
        {isEmpty && (<Empty />)}
        {weather && weather.main  ? (
           <WeatherCard 
           name={weather.name}
           time={currentTime}
           temp={`${Math.floor(convertToCelicius(weather?.main.temp))}°C`}
           feels_like={Math.floor(convertToCelicius(weather?.main.feels_like))}
           tempMax={`${Math.floor(convertToCelicius(weather?.main.temp_max))}°C`}
           tempMin={`${Math.floor(convertToCelicius(weather?.main.temp_min))}°C`}
           wind={`${weather?.wind.speed} km/h`} 
           humidity={`${weather?.main.humidity}%`}
           pressure={`${weather?.main.pressure} mb`} 
           visibility={weather?.visibility} 
           />
        ): null}
      </Box>
    </Layout>
  );
}

export default App;
