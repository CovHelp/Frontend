import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

const OrganizationCard = ({ name, website, picture, locations, category, contact , address }) => {

  const getImageUrl = (id) => {
    return `https://091ba7940ecb.ngrok.io/v1/posts/file/${id}`
  }

  return (
    <Box w={"auto"} borderRadius="xl" h={["auto","500px"]} m={1} background="white">
      <Flex p={["4", "8"]} bgColor="white" borderRadius="xl" >
        <Flex flexDir="column" _dark=" true" w="100%">
          <Heading as="h6" size="sm">
            {name}  
          </Heading>
          <Text as="a" href={website} target="_blank" color="messenger.500" _hover={{ textDecoration: "underline" }}>{website}</Text>
          <Text>Contact : {contact}</Text>
        </Flex>
      </Flex>
      {/* {post.picture !== "" && ( */}
      <Image
        src={getImageUrl(picture)}
        objectFit="cover"
        color="gray.600"
        w="100%"
        minH="230px"
        ml="auto"
        mr="auto"
        alt=""
      />
      {/* }  */}

      <Box
        p={["4", "8"]}
        // pt={post.picture === "" && ["0", "0"]}
        bgColor="white"
        borderBottomRadius="xl"
      >
        <span> state &bull; city </span>
        <Box d="flex" alignItems="baseline">

          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {category.map((i) => (
              <Text as="span">{i} </Text>
            ))}
            {/* {post.locations.map((i) => ( */}
          </Box>
        </Box>
        <Box mt="2" fontWeight="normal" as="h4" lineHeight="tight"></Box>{" "}
        <Text fontWeight="medium">
          {address}
        </Text>
        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrganizationCard;
