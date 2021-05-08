import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import { IoHandLeftSharp } from "react-icons/io5";
import { getNameByCategoryID } from "../../../api/post";
import CardBox from "../CardBox";
import { CardButton } from "../CardButton";
import { FaComment } from 'react-icons/fa'
import { Input, InputGroup } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import CommentBubble from "../../CommentBubble/CommentBubble";
import { Link } from "react-router-dom";

const NeedHelpCard = ({ post, isProfile }) => {
  const asd = {
    user: {
      id: 1,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      type: 1,
      urgency: "urgency",
      body:
        "Modern home in city center in the heart of historic Los Angeles Modern home in city center in the heart of historic Los AngelesModern home in city center in the heart of historic Los AngelesModern home in city center in the heart of historic Los AngelesModern home in city center in the heart of historic Los AngelesModern home in city center in the heart of historic Los Angeles",
      picture: "https://bit.ly/2Z4KKcF",
      category: 3,
      isClosed: 2,
      lat: "asd",
      long: "asa",
      user: {
        id: 1,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        firstName: "Firstname",
        LastName: "Lastname",
        email: "asidjwef",
        token: "093284029384023",
        profile_pic: "Picture",
      },
      comment: [
        {
          id: 1,
          createdAt: "createdAt",
          updatedAt: "updatedAt",
          comment: "very noice",
        },
      ],
    },
  };



  return (
    <CardBox>
      <Flex w={"100%"} p={["4", "8"]} bgColor="white">
        <Avatar
          w={["40px", "48px"]}
          h={["40px", "48px"]}
          src={post.user.profile_pic}
        />
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
      {post.picture !== "" && (
        <Image src={`https://apis.covhelp.online/v1/posts/file/${post.picture}`} ml='auto' mr="auto" objectFit="cover" color="gray.600" alt="" />
      )}

      <Box p={["4", "8"]} pt={post.picture === "" && ["0", "0"]} bgColor="white">
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
          >
            {post.location.city} &bull; {post.location.state}
          </Box>
        </Box>

        <Box
          mt="2"
          fontWeight="normal"
          as="h4"
          lineHeight="tight"
          noOfLines={[3, 4]}
        >

          <div dangerouslySetInnerHTML={{ __html: post.body.replaceAll('\n', '<br/>') }} />
          <Link to="/post-detail"> <Text fontWeight="medium" _hover={{textDecoration:'underline'}}>Read More</Text> </Link>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm">
            {/* {post.reviewCount} reviews */}
          </Box>
        </Box>

        {isProfile !== "true" && (
          <>
            <hr />
            <Grid templateColumns="repeat(2, 1fr)">
              <CardButton icon={IoHandLeftSharp} name="I Can help" />
              <CardButton to="post-detail" icon={FaComment} name="Comment" />

            </Grid>
          </>
        )}
      </Box>
      <Flex flexDirection="column" px={["4", "8"]} minH="100px" pb={["4", "8"]} bgColor="white" h={'auto'}>



        <InputGroup
          d="flex"
          alignItems="center"
          justifyContent="center"
          mb={2}
          dir="row">
          {/* <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineSearch color="gray.300" size='1rem' />}
        /> */}

          <Avatar
            w={["40px", "48px"]}
            h={["40px", "48px"]}
            src={post.picture}
            mr={["2", "4"]} />


          <Input
            type="text"
            placeholder="Comment"
            borderRadius={"lg"}
            bgColor="rgb(245,245,245)" />

          <Button colorScheme="messenger" borderRadius="lg" px={[6, 8]} ml={2}>Post</Button>

        </InputGroup>

        <CommentBubble name="So" date="4/20/69" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis" />

        <CommentBubble name="Up" date="4/20/69" comment="Lorem ipsum dolor" />
        <Link to="/post-detail"> <Text fontWeight="medium" _hover={{textDecoration:'underline'}}>Read More</Text> </Link>


      </Flex>
    </CardBox>
  );
};

export default NeedHelpCard;
