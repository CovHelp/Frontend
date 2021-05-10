import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup } from "@chakra-ui/input";
import { Badge, Box, Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import { FaComment } from "react-icons/fa";
import { IoHandLeftSharp } from "react-icons/io5";
import { MdThumbUp } from "react-icons/md";
import {
  createProvideHelpComment,
  getNameByCategoryID,
  getProvideHelpComments,
  createProvideHelpDepvote,
  createProvideHelpUpvote,
} from "../../../api/post";
import { useToast } from "@chakra-ui/toast";
import CardBox from "../CardBox";
import { CardButton } from "../CardButton";
import CommentBubble from "../../CommentBubble/CommentBubble";
import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { createProvideChannel } from "../../../api/channel";

const GiveHelpCard = ({ post, isProfile, readMore, showComments = false }) => {
  const userStore = useSelector((store) => store.userStore);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(null);
  const [likesCount, setLikesCount] = useState(null);

  const toast = useToast();
  useEffect(() => {
    handleLoadComments();
    // eslint-disable-next-line
  }, []);

  const handleLoadComments = async () => {
    try {
      const res = await getProvideHelpComments({ postID: post.id });
      setComments(res);
    } catch (e) {}
  };

  const [commentLoader, setCommentLoader] = useState();

  const handleComment = async () => {
    try {
      setCommentLoader(true);
      await createProvideHelpComment({
        comment: comment,
        post: post.id,
        token: userStore.token.token,
      });
      setCommentLoader(false);
      setComment("");
      handleLoadComments();

      (() => {
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
    if(userStore.token && userStore.token.token){
      try{
        // eslint-disable-next-line
        const res = await createProvideChannel({
          user1: userStore.user.id,
          user2: post.user.id,
          postID: post.id,
          token: userStore.token.token
        })
        toast({
          position: "top-right",
          isClosable: true,
          duration: 4000,
          description: "Chat room created, head over to chat page!",
          status: "success",
        });
      }catch(e){

      }
    }
  }

  useEffect(() => {
    try{
    isLiked();
    setLikesCount(post.upvotes.length);
    }catch(e){}
    // eslint-disable-next-line
  }, []);

  const isLiked = () => {
    if (userStore.token && userStore.token.token) {
      try{
      if (post.upvotes.length === 0) {
        setLiked(false);
      }
      var res = post.upvotes.filter(
        (post) => post.userID === userStore.user.id
      );
      if (res.length > 0) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }catch(e){}
    } else {
      setLiked(false);
    }
  };

  const unlike = async () => {
    setLiked(false);
    setLikesCount(c=>c-1);
    await createProvideHelpDepvote({
      userID: userStore.user.id,
      token: userStore.token.token,
      postID: post.id,
    });
    
  };

  const like = async () => {
    setLiked(true);
    setLikesCount(c=>c+1);
    await createProvideHelpUpvote({
      userID: userStore.user.id,
      token: userStore.token.token,
      postID: post.id,
    });
   
  };

  const handleLikeAction = async () => {
    if (userStore.token && userStore.token.token) {
      if (liked) {
        await unlike();
      } else {
        await like();
      }
    }
  };

  return (
    <CardBox>
      <Flex w={"100%"} p={["4", "8"]} bgColor="white">
        <Avatar
          src={post.user.profile_pic}
          w={["40px", "48px"]}
          h={["40px", "48px"]}
        />
        <Flex flexDir="column" _dark=" true" ml={["2", "4"]}>
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
                  py="0.5"
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
          objectFit="cover"
          color="gray.600"
          ml="auto"
          mr="auto"
          alt=""
        />
      )}

      <Box
        p={["4", "8"]}
        pt={post.picture === "" && ["0", "0"]}
        bgColor="white"
      >
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {post.locations.map((i) => (
              <span>
                {i.state} &bull; {i.city}
              </span>
            ))}
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
          <Link to={`/post-detail/1/${post.id}`}>
            {" "}
            <Text fontWeight="medium" _hover={{ textDecoration: "underline" }}>
              Read More
            </Text>{" "}
          </Link>
        )}

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm">
            {/* {card.reviewCount} reviews */}
          </Box>
        </Box>

        {isProfile !== "true" && (
          <>
            <hr />
            <Grid templateColumns="repeat(3, 1fr)">
              <CardButton
                isLiked={liked}
                onClick={handleLikeAction}
                // name="Like"
                icon={MdThumbUp}
                name={
                  likesCount === 0 || !likesCount
                    ? "Upvote"
                    // eslint-disable-next-line
                    : "Upvotes " + "(" + likesCount + ")"
                }
              />

              <CardButton onClick={handleHelpChannel} icon={IoHandLeftSharp} name="I need help" />
              <CardButton
                to={`post-detail/1/${post.id}`}
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

      {/* Comments */}

      {/* {readMore === false && */}
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
              value={comment}
              type="text"
              placeholder="Comment"
              onChange={(e) => setComment(e.target.value)}
              borderRadius={"lg"}
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
              Post
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

export default GiveHelpCard;
