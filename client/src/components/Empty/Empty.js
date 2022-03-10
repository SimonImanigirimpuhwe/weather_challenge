import { Text } from "@chakra-ui/react"

const Empty = () => {
    return (
        <Text 
        textShadow={"lg"} 
        textAlign="center" 
        fontFamily={"monospace"}
        fontSize="l" 
        fontWeight='bold'
        pt={20}
        >
            Search any city to view the current weather
        </Text>
    )
};


export default Empty;