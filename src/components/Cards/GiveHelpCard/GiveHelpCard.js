import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Flex, Grid, Heading } from "@chakra-ui/layout";
import { IoMdShareAlt } from "react-icons/io";
import { IoHandLeftSharp } from "react-icons/io5";
import { MdThumbUp } from "react-icons/md";
import { getNameByCategoryID } from "../../../api/post";
import CardBox from "../CardBox";
import { CardButton } from "../CardButton";

const CardButtons = (props) => {
  return (
    <Button background="transparent">
      <Flex
        flexDir={["column", "column", "column", "column", "row"]}
        alignItems="center"
        justifyContent="center"
        minH="1rem"
      >
        <Icon mr={2} ml={2} w={[5, 6]} h={[5, 6]} as={props.icon} />
        {props.name}
      </Flex>
    </Button>
  );
};

const GiveHelpCard = ({ post, isProfile }) => {
  

  return (
    <CardBox>
      <Flex w={"100%"} p={["4", "8"]} bgColor="white">
        <Avatar src={post.user.profile_pic} w={["40px", "48px"]} h={["40px", "48px"]} />
        <Flex flexDir="column" _dark="true" ml={["2", "4"]}>
          <Heading as="h6" size="sm">
            {post.user.firstName} {post.user.LastName}
          </Heading>
          <Box>
            <p style={{ fontSize: 12 }}>
              {new Date(post.createdAt).toLocaleString()} &bull;
              <span>
                <Badge
                  borderRadius="full"
                  px="2"
                  ml={1}
                  mb={1}
                  colorScheme="green"
                >
                  {getNameByCategoryID(post.category)} {/* URGENCY */}
                </Badge>
              </span>
            </p>
          </Box>
        </Flex>
      </Flex>
      <Image
        src={post.picture}
        objectFit="cover"
        color="gray.600"
        alt=""
      />

      <Box p={["4", "8"]} pt={post.picture === "" && ["0", "0"]} bgColor="white">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="red">
            Urgency level: {post.urgency} {/* URGENCY */}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
          </Box>
        </Box>

        <Box
          mt="2"
          fontWeight="normal"
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

        {isProfile !== "true" && (
          <>
            <hr />
            <Grid pt={["4", "8"]} templateColumns="repeat(3, 1fr)" gap={2}>
              <CardButton name="Like" icon={MdThumbUp} />
              <CardButton icon={IoHandLeftSharp} name="I need help" />
              <CardButton icon={IoMdShareAlt} name="Appreciate" />
            </Grid>
          </>
        )}
      </Box>
    </CardBox>
  );
};

export default GiveHelpCard;
