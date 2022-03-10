import React from "react";
import PropTypes from "prop-types";
import {
    Box,
    Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { Button } from "../Button";

const Search = ({searchTerm, onSearch, handleSearch, isSearching}) => {


    const mainTeal = useColorModeValue("teal.300", "teal.300");
    const searchIconColor = useColorModeValue("gray.700", "gray.200");
    const inputBg = useColorModeValue("white", "gray.800");
    return (
        <Flex justifyContent={"center"} mt={20}>
            <InputGroup
                bg={inputBg}
                borderRadius="15px"
                w="300px"
                _focus={{
                borderColor: { mainTeal },
                }}
                _active={{
                borderColor: { mainTeal },
                }}
            >
                <InputLeftElement
                children={
                    <IconButton
                    bg="inherit"
                    borderRadius="inherit"
                    _hover="none"
                    _active={{
                        bg: "inherit",
                        transform: "none",
                        borderColor: "transparent",
                    }}
                    _focus={{
                        boxShadow: "none",
                    }}
                    icon={<BiSearch color={searchIconColor} w="15px" h="15px" />}
                    ></IconButton>
                }
                />
                <Input
                fontSize="xs"
                py="11px"
                placeholder="Type city name"
                borderRadius="inherit"
                value={searchTerm}
                onChange={onSearch}
                />
            </InputGroup>
            <Box marginLeft={2}>
                <Button 
                    title={isSearching ? "Searching...": "Search"}
                    borderRadius="md"
                    handleClick={handleSearch}
                />
            </Box>
      </Flex>
    );
};

export default Search;

Search.propTypes = {
    searchTerm: PropTypes.string,
    onSearch: PropTypes.func,
    handleSearch: PropTypes.func,
    isSearching: PropTypes.bool
}

Search.defaultProps = {
    isSearching: false
}