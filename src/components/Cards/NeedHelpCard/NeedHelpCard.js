import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Flex, Heading } from "@chakra-ui/layout";
import { IoHandLeftSharp } from "react-icons/io5";
import { getNameByCategoryID } from "../../../api/post";
import { CardButton } from "../CardButton";

const NeedHelpCard = ({ post }) => {
  return (
    <Flex m={2} w={["100%"]} maxW="700px" h="auto">
      <Box
        w="100%"
        borderRadius={"xl"}
        maxW="-moz-max-content"
        mt={1}
        borderWidth="1px"
        overflow="hidden"
      >
        <Box w={"100%"} p={8} bgColor="white">
          <Flex>
            <Avatar src={post.user.profile_pic}/>
            <Box d="flex" flexDir="column" _dark="true" ml="4">
              <Heading as="h6" size="sm">
                {post.user.firstName} {post.user.LastName}
              </Heading>
              <Box>
                {new Date(post.createdAt).toLocaleString()} &bull;
                <Badge
                  borderRadius="full"
                  px="2"
                  ml={1}
                  mb={1}
                  colorScheme="green"
                >
                  {getNameByCategoryID(post.category)} {/* URGENCY */}
                </Badge>
              </Box>
            </Box>
          </Flex>
        </Box>
        {post.picture !== "" && (
          <Image src={post.picture} objectFit="cover" color="gray.600" alt="" />
        )}

        <Box px="8" bgColor="white">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="red">
              Urgency Level: {post.urgency}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            ></Box>
          </Box>

          <Box
            mt="2"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={[1, 2, 3, 4]}
          >
            {post.body}
          </Box>

          <Box d="flex" mt="2" alignItems="center">
            <Box as="span" color="gray.600" fontSize="sm">
              {/* {card.reviewCount} reviews */}
            </Box>
          </Box>
          <hr />

          <Flex
            flexDir={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            w="100%"
            pt={4}
            pb={4}
          >
            <CardButton icon={IoHandLeftSharp} name="I Can help" />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default NeedHelpCard;
