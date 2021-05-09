import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

export const CardButton = ({ icon, name, size, to, onClick = null, isLiked=false }) => {
  if (onClick) {
    return (
      <Button
        onClick={onClick}
        to={to}
        maxW="100%"
        background="transparent"
        mt={2}
        p={6}
      >
        <Flex
          flexDir="column"
          alignItems="center"
          fontSize="14px"
          justifyContent="center"
          minH="1rem"
        >
          <Icon
            color={isLiked ? "blue.600" : "gray.600"}
            w={[5, 6]}
            h={["16px", "20px"]}
            as={icon}
            size={size}
          />
          <Text color="gray.600">{name}</Text>
        </Flex>
      </Button>
    );
  } else {
    return (
      <Button
        as={Link}
        to={to}
        maxW="100%"
        background="transparent"
        mt={2}
        p={6}
      >
        <Flex
          flexDir="column"
          alignItems="center"
          fontSize="14px"
          justifyContent="center"
          minH="1rem"
        >
          <Icon
            color="gray.600"
            w={[5, 6]}
            h={["16px", "20px"]}
            as={icon}
            size={size}
          />
          <Text color="gray.600">{name}</Text>
        </Flex>
      </Button>
    );
  }
};
