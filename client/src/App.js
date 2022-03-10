import { useState } from "react";
import axios from 'axios';
import "./App.css";
import { Layout } from "./components/Layout";
import { Search } from "./components/Search";
import { Box, Text } from "@chakra-ui/react";
import { WeatherCard } from "./components/Card";
import { Empty } from "./components/Empty";

const SERVER_URL= "http://localhost:5000/api";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [weather, setWeather] = useState({});
  const [weatherErr, setWeatherErr] = useState(null);
  const [isEmpty, setIsEmpty] = useState(true);

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
    if (searchTerm === "") {
      setWeatherErr("Please type city name")
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
      console.log(err.message)
      setWeather({})
      setWeatherErr(err.message);
      setIsSearching(false)
      setIsEmpty(false)
    })
    // console.log(searchTerm)
  }
  const getCurrentTime = () => {
    const day = new Date();
    const hours = day.getHours();
    const minutes = day.getMinutes();

    return hours + ":" + minutes
  }

  const currentTime  = getCurrentTime();

  return (
    <Layout ftPos={ weather && weather.main ? "mt-0": "mt-78"} isEmpty={isEmpty}>
      <Search 
        onSearch={onSearch}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        isSearching={isSearching}
      />
      <Box>
        {weatherErr && <Text textAlign="center" mt={10} color="red.400">{weatherErr}</Text>}
        {isEmpty && (<Empty />)}
        {weather && weather.main  ? (
           <WeatherCard 
           name={weather.name}
           time={currentTime}
           temp={`${weather?.main.temp}°C`}
           feels_like={weather?.main.feels_like}
           tempMax={`${Math.floor(weather?.main.temp_max)}°C`}
           tempMin={`${Math.floor(weather?.main.temp_min)}°C`}
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
