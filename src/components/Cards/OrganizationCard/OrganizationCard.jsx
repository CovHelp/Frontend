import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

const OrganizationCard = ({ firstName, lastName, picture }) => {
  return (
    <Box w={"auto"} borderRadius="xl">
      <Flex p={["4", "8"]} bgColor="white" borderRadius="xl">
        <Flex flexDir="column" _dark=" true" w="100%">
          <Heading as="h6" size="sm">
            First Name &bull; Last Name
          </Heading>
        </Flex>
      </Flex>
      {/* {post.picture !== "" && ( */}
      <Image
        src={"https://apis.covhelp.online/v1/posts/file/13ba811d-05a5-4e79-bf77-38e0e1a704da"}
        objectFit="cover"
        color="gray.600"
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
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {/* {post.locations.map((i) => ( */}
            <span>{/* {i.state} &bull; {i.city} */} state &bull; city</span>
          </Box>
        </Box>
        <Box mt="2" fontWeight="normal" as="h4" lineHeight="tight"></Box>{" "}
        <Text fontWeight="medium" _hover={{ textDecoration: "underline" }}>
          Read More
        </Text>{" "}
        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OrganizationCard;
