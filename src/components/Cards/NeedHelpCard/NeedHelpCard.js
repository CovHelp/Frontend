import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup } from "@chakra-ui/input";
import { Badge, Box, Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { useEffect, useState } from "react";
import { FaComment } from "react-icons/fa";
import { IoHandLeftSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createNeedChannel } from "../../../api/channel";
import {
  createNeedHelpComment,
  getNameByCategoryID,
  getNeedHelpComments,
} from "../../../api/post";
import CommentBubble from "../../CommentBubble/CommentBubble";
import CardBox from "../CardBox";
import { CardButton } from "../CardButton";

const NeedHelpCard = ({ post, isProfile, showComments = false }) => {
  const userStore = useSelector((store) => store.userStore);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const toast = useToast();
  // eslint-disable-next-line
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

  useEffect(() => {
    handleLoadComments();
    // eslint-disable-next-line
  }, []);

  const [commentLoader, setCommentLoader] = useState();

  const handleLoadComments = async () => {
    try {
      const res = await getNeedHelpComments({ postID: post.id });
      setComments(res);
    } catch (e) { }
  };

  const handleComment = async () => {
    try {
      setCommentLoader(true);
      await createNeedHelpComment({
        comment: comment,
        post: post.id,
        token: userStore.token.token,
      });
      setCommentLoader(false);
      setComment("");

      handleLoadComments();

      (() => {
        console.log("toast called");
        toast({
          position: "top-right",
          isClosable: true,
          duration: 4000,
          description: "Comment Posted",
          status: "success",
        });
      })();
    } catch (e) {
      setCommentLoader(false);
    }
  };

  const handleHelpChannel = async () => {
    if (userStore.token && userStore.token.token) {
      try {
        // eslint-disable-next-line
        const res = await createNeedChannel({
          user1: userStore.user.id,
          user2: post.user.id,
          postID: post.id,
          token: userStore.token.token
        });
        toast({
          position: "top-right",
          isClosable: true,
          duration: 4000,
          description: "Chat room created, head over to chat page!",
          status: "success",
        });
      } catch (e) { }
    }
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
        <Image
          src={`https://apis.covhelp.online/v1/posts/file/${post.picture}`}
          ml="auto"
          mr="auto"
          objectFit="cover"
          color="gray.600"
          alt=""
        />
      )}

      <Box
        p={["4", "8"]}
        pt={post.picture === "" && ["0", "0"]}
        bgColor="white"
      >
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme={post.urgency > 2 ? 'red' : 'orange'}>
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
          noOfLines={!showComments && [3, 4]}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.replaceAll("\n", "<br/>"),
            }}
          />
        </Box>
        {!showComments && (
          <Link to={`/post-detail/0/${post.id}`}>
            <Text fontWeight="medium" _hover={{ textDecoration: "underline" }}>
              Read More
            </Text>{" "}
          </Link>
        )}

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm">
            {/* {post.reviewCount} reviews */}
          </Box>
        </Box>

        {isProfile !== "true" && (
          <>
            <hr />
            <Grid templateColumns="repeat(2, 1fr)">
              <CardButton
                onClick={handleHelpChannel}
                icon={IoHandLeftSharp}
                name="I Can help"
              />
              <CardButton
                to={`post-detail/0/${post.id}`}
                icon={FaComment}
                name={
                  post.comments.length === 0
                    ? "Comment"
                    // eslint-disable-next-line
                    : "Comments " + "(" + post.comments.length + ")"
                }
              />
            </Grid>
          </>
        )}
      </Box>
      {userStore.token && userStore.token.token && (
        <Flex
          flexDirection="column"
          px={["4", "8"]}
          pb={["4", "8"]}
          bgColor="white"
          h={"auto"}
        >
          <InputGroup
            d="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
            dir="row"
          >
            <Avatar
              w={["40px", "48px"]}
              h={["40px", "48px"]}
              src={
                userStore.token &&
                userStore.token.token &&
                userStore.user.profile_pic
              }
              mr={["2", "4"]}
            />

            <Input
              type="text"
              placeholder="Comment"
              borderRadius={"lg"}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              bgColor="rgb(245,245,245)"
            />

            <Button
              isDisabled={comment.trim().length === 0 || !userStore.token}
              onClick={handleComment}
              colorScheme="messenger"
              borderRadius="lg"
              px={[6, 8]}
              ml={2}
              isLoading={commentLoader}
            >
              POST
            </Button>
          </InputGroup>
          {showComments && (
            <div>
              {comments.length > 0 &&
                comments.map((comment) => (
                  <CommentBubble
                    key={comment.id}
                    name={comment.user.firstName}
                    profile_pic={comment.user.profile_pic}
                    date={
                      new Date(comment.createdAt).toLocaleDateString() +
                      ", " +
                      new Date(comment.createdAt).toLocaleTimeString()
                    }
                    comment={comment.comment}
                  />
                ))}
            </div>
          )}
        </Flex>
      )}

      {!userStore.token && (
        <Flex
          flexDirection="column"
          px={["4", "8"]}
          pb={["4", "8"]}
          bgColor="white"
          h={"auto"}
        >
          {showComments && (
            <div>
              {comments.length > 0 &&
                comments.map((comment) => (
                  <CommentBubble
                    key={comment.id}
                    name={comment.user.firstName}
                    profile_pic={comment.user.profile_pic}
                    date={
                      new Date(comment.createdAt).toLocaleDateString() +
                      ", " +
                      new Date(comment.createdAt).toLocaleTimeString()
                    }
                    comment={comment.comment}
                  />
                ))}
            </div>
          )}
        </Flex>
      )}
    </CardBox>
  );
};

export default NeedHelpCard;
