import { Image } from "@chakra-ui/image";
import { Badge } from "@chakra-ui/layout";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

const OrganizationCard = ({ name, website, picture, locations, category, contact, address }) => {

  const getImageUrl = (id) => {
    return `https://091ba7940ecb.ngrok.io/v1/posts/file/${id}`
  }

  return (
    <Box w={"auto"} borderRadius="xl" h={["auto", "550px"]} m={1} background="white">
      <Flex p={["4", "8"]} bgColor="white" borderRadius="xl" >
        <Flex flexDir="column" _dark=" true" w="100%">
          <Heading as="h6" size="sm">
            {name}
          </Heading>
          <Text as="a" href={website} target="_blank" color="messenger.500" _hover={{ textDecoration: "underline" }}>{website}</Text>
          <Text>Contact : {contact}</Text>
        </Flex>
      </Flex>
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

      <Box
        p={["4", "8"]}
        // pt={post.picture === "" && ["0", "0"]}
        bgColor="white"
        borderBottomRadius="xl"
      >
        {locations.map((i) => (
          <Text>
            {i.state} &bull; {i.city}
          </Text>
        ))}
        <Box d="flex" alignItems="baseline">

          <Badge
            color="gray.800"
            fontWeight="semibold"
            letterSpacing="wide"
            borderRadius="full"
            px="2"
            colorScheme="green"
            fontSize="xs"
            mt={1}
            textTransform="uppercase"
          >
            {category.map((i) => (
              <Text as="span">{i}</Text>
            ))}

          </Badge>
        </Box>
        <Box mt="2" fontWeight="normal" as="h4" lineHeight="tight"></Box>{" "}
        <Text fontWeight="medium" noOfLines={[2, 3]} isTruncated={true}>
          <div
            dangerouslySetInnerHTML={{
              __html: address.replaceAll("<div>", "<br/>"),
            }}
          />
        </Text>
        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrganizationCard;
