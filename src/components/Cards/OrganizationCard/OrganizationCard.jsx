import { Image } from "@chakra-ui/image";
import { Badge } from "@chakra-ui/layout";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

const OrganizationCard = ({ name, website, picture, locations, category, contact, address, donation }) => {

  const getImageUrl = (id) => {
    return `https://apis.covhelp.online/v1/posts/file/${id}`
  }

  return (
    <Box borderRadius="xl" minW={0} h={["auto", "auto"]} minH={["auto", "580px"]} m={1} background="white">
      <Flex w="100%" p={["4", "6"]} bgColor="white" borderRadius="xl" >
        <Flex flexDir="column" _dark=" true" w="100%">
          <Heading as="h6" size="sm">
            {name}
          </Heading>
          <Text as="span"><b>Website: </b></Text><Text as="a" href={`https://${website}`} target="_blank" color="messenger.500" _hover={{ textDecoration: "underline" }}>{website}</Text>
          <Text><b>Contact : </b>{contact}</Text>
        </Flex>
      </Flex>
      <Image
        src={getImageUrl(picture)}
        objectFit="cover"
        color="gray.600"
        w="100%"
        ml="auto"
        mr="auto"
        alt=""
      />

      <Box
        display="flex"
        flexDirection="column"
        p={["4", "6"]}
        w="auto"
        maxH="auto"
        // border="5px solid black"
        // pt={post.picture === "" && ["0", "0"]}
        bgColor="white"
        borderBottomRadius="xl"
      >
        <span><b>Active Locations: </b></span>
        {locations.map((i) => (
          <Text fontSize="smaller" >
            {i.state} &bull; {i.city}
          </Text>
        ))}
        <Box d="flex" wordBreak="break-all" alignItems="baseline" flexWrap="wrap">

          {/* <Badge
            color="gray.800"
            fontWeight="semibold"
            letterSpacing="wide"
            borderRadius="full"
            px="2"
            colorScheme="green"
            fontSize="xs"
            mt={1}
            textTransform="uppercase"
          > */}
          {category.map((i) => (
            <Badge isTruncated overflow="hidden" h="auto" colorScheme="green" px="2" mr={1} my={2} borderRadius="full" as="span">{i}</Badge>
          ))}

          {/* </Badge> */}
        </Box>
        <Flex direction="column" w="auto" wordBreak="break-all" height="auto" minW={0}>
          <Text w="auto" minW={0} fontWeight="medium" noOfLines={3}>
            <span><b>Address : </b></span>
            <span
              dangerouslySetInnerHTML={{
                __html: address.replaceAll("<div>", "<br/>"),
              }}
            />
          </Text>
          <Text mt={1}><b>Donation Medium: </b>{donation}</Text>
        </Flex>
        {/* <Box d="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default OrganizationCard;
