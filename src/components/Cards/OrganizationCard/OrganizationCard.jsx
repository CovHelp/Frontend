import { Avatar } from '@chakra-ui/avatar'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'
import CardBox from '../CardBox'

const OrganizationCard = () => {
    return (
        <CardBox>
            <Flex w={"auto"} p={["4", "8"]} bgColor="white">
        {/* <Avatar
          src={"https://apis.covhelp.online/v1/posts/file/0719c4fd-684b-42c2-96a5-f7db5a28fce2"}
          w={["40px", "48px"]}
          h={["40px", "48px"]}
        /> */}
        <Flex flexDir="column" _dark=" true">
          <Heading as="h6" size="sm">
           First Name &bull; Last Name
          </Heading>
          {/* <Box>
            <p style={{ fontSize: 12 }}>
              {new Date(post.createdAt).toLocaleString()} &bull;  Date 
              <span>
                <Badge
                  borderRadius="full"
                  px="2"
                  ml={1}
                  mb={1}
                  py="0.5"
                  colorScheme="green"
                >
                  {getNameByCategoryID(post.category)} {/* URGENCY
                </Badge>
              </span>
            </p>
          </Box> */}
        </Flex>
      </Flex>
      {/* {post.picture !== "" && (*/}
        <Image
          src={"https://apis.covhelp.online/v1/posts/file/0719c4fd-684b-42c2-96a5-f7db5a28fce2"}
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
              <span>
                {/* {i.state} &bull; {i.city} */} state &bull; city
              </span>
            )
            )
          </Box>
        </Box>

        <Box
          mt="2"
          fontWeight="normal"
          as="h4"
          lineHeight="tight"
        //   noOfLines={!showComments && [3, 4]}
        >
          {/* <div
            dangerouslySetInnerHTML={{
              __html: post.body.replaceAll("\n", "<br/>"),
            }}
          /> */}
        </Box>
        {/* {!showComments && ( */}
          {/* <Link to={`/post-detail/1/${post.id}`}> */}
            {" "}
            {" "}
            <Text fontWeight="medium" _hover={{ textDecoration: "underline" }}>
              Read More
            </Text>{" "}
          {/* </Link> */}
        {/* )} */}
        

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm">
            {/* {card.reviewCount} reviews */}
          </Box>
        </Box>

        {/* {isProfile !== "true" && (
          <>
            <hr />
            <Grid templateColumns="repeat(3, 1fr)">
              <CardButton  name="Like" icon={MdThumbUp} name={(post.upvotes.length === 0? "Upvote" : "Upvotes " + "(" +  post.upvotes.length + ")")} />
              <CardButton icon={IoHandLeftSharp} name="I need help" />
              <CardButton to={`post-detail/1/${post.id}`} icon={FaComment} name={(post.comments.length===0? "Comment" : "Comments " + "(" +  post.comments.length + ")")}/>
            </Grid>
          </>
        )} */}
      </Box>

      {/* Comments */}

      {/* {readMore === false && */}
      {/* {userStore.token && userStore.token.token && (
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
              isDisabled={!userStore.token}
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
      )} */}

      {/* {!userStore.token && (
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
      )} */}
        </CardBox>
    )
}

export default OrganizationCard
