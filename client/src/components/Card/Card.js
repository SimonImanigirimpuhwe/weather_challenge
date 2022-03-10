import {
    Flex,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import PropTypes from "prop-types";
import {WiDayCloudy, WiHumidity} from "react-icons/wi"; 
import {BsFillSunFill} from "react-icons/bs"; 
import {IoThermometerOutline} from "react-icons/io5"; 
import {SiWindicss} from "react-icons/si";
import {CgArrowsMergeAltV} from "react-icons/cg";
import {MdVisibility} from "react-icons/md";
import { Separator } from '../Separator';
import { useEffect, useState } from 'react';


const Row = ({icon, label, value}) => {
    return (
        <Flex pr={5} pl={5} pt={2}>
            <Stack display={"flex"} direction="row" alignItems={"center"}>
                <Text>{icon}</Text>
                <Text>{label}</Text>
            </Stack>
            <Stack marginLeft={"auto"}>
                <Text>{value}</Text>
            </Stack>
        </Flex>
    )
}

const HeaderCard = ({name, time, temp}) => {
    const [isLess, setIsLess] = useState(+temp.slice(0, 2) < 20 ? true:false);

    useEffect(() => {
        setIsLess(+temp.slice(0, 2) > 20 ? false:true)
    },[temp]);

    return (
    <Stack
    borderWidth="1px"
    borderRadius="lg"
    w={{ sm: '100%', md: '540px' }}
    height={{ sm: '276px', md: '10rem' }}
    direction={{ base: 'column', md: 'row' }}
    bg={useColorModeValue('white', 'gray.900')}
    boxShadow={'2xl'}
    >
    <Stack
        flex={1}
        flexDirection="column"
        >
        <Flex bg={"gray.500"} textColor="white" height={10} p="2" borderTopRightRadius="md" borderTopLeftRadius="md" >
            <Text>{name}</Text>
            <Text marginLeft={"auto"}>{`As of ${time}`}</Text>
        </Flex>
        <Flex direction={"row"} p="2">
            <Stack direction={"column"}>
                <Text>{temp}</Text>
                <Text>{isLess ? "Cloudy" : "Sunny"}</Text>
            </Stack>
            <Stack marginLeft={"auto"}>
                {isLess? <WiDayCloudy color='gray' size={30}/> : <BsFillSunFill color='orange' size={30}/>}
            </Stack>
        </Flex>
    </Stack>
    </Stack>
    )
}


const DetailsCard = ({
    name,
    feels_like, 
    tempMax, 
    tempMin, 
    wind, 
    humidity, 
    pressure, 
    visibility, 
}) => {

    return (
    <Stack
    borderWidth="1px"
    borderRadius="lg"
    w={{ sm: '100%', md: '540px' }}
    height={{ sm: '100%', md: '100%' }}
    direction={{ base: 'column', md: 'row' }}
    bg={useColorModeValue('white', 'gray.900')}
    boxShadow={'2xl'}
    padding={4}>
    <Stack
        flex={1}
        flexDirection="column"
        p={1}
        >
        <Text textColor={"black"} fontWeight="bold">{`Weather Today in ${name}`}</Text>
        <Flex direction={"column"} pt={10} pb={3}>
            <Text>{feels_like}</Text>
            <Text>Feels Like</Text>
        </Flex>
        <Separator />
        <Row icon={<IoThermometerOutline />} label="High/Low" value={`${tempMax}/${tempMin}`}/>
        <Separator mb={1}/>
        <Row icon={<SiWindicss />} label="Wind" value={wind}/>
        <Separator />
        <Row icon={<WiHumidity />} label="Humidity" value={humidity}/>
        <Separator />
        <Row icon={<CgArrowsMergeAltV />} label="Pressure" value={pressure}/>
        <Separator />
        <Row icon={<MdVisibility />} label="Visibility" value={visibility}/>
    </Stack>
    </Stack>
    )
}

export default function Card({
    name, 
    time, 
    temp,
    feels_like,
    tempMax, 
    tempMin, 
    wind, 
    humidity, 
    pressure, 
    visibility, 
}) {
return (
    <Flex direction={'column'} mt={20}>
        <HeaderCard 
            name={name} 
            time={time}
            temp={temp}
        />
        <Separator />
        <DetailsCard 
            name={name}
            feels_like={feels_like}
            tempMax={tempMax} 
            tempMin={tempMin} 
            wind={wind}
            humidity={humidity} 
            pressure={pressure}
            visibility={visibility} 
        />
    </Flex>
);
}


Row.propTypes = {
    icon: PropTypes.elementType, 
    label: PropTypes.string, 
    value: PropTypes.number
}

HeaderCard.propTypes = {
    name: PropTypes.string, 
    time: PropTypes.string, 
    temp: PropTypes.string
}

DetailsCard.propTypes = {
    name: PropTypes.string, 
    feels_like: PropTypes.string,
    tempMax: PropTypes.string,
    tempMin: PropTypes.string,
    wind: PropTypes.string,
    humidity: PropTypes.string,
    visibility: PropTypes.string,
}

Card.propTypes = {
    name: PropTypes.string, 
    time: PropTypes.string, 
    temp: PropTypes.string,
    feels_like: PropTypes.string,
    tempMax: PropTypes.string,
    tempMin: PropTypes.string,
    wind: PropTypes.string,
    humidity: PropTypes.string,
    pressure: PropTypes.string,
    visibility: PropTypes.string,
}