import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup } from "@chakra-ui/input";
import { Badge, Box, Flex, Grid, Heading } from "@chakra-ui/layout";
import { FaComment } from "react-icons/fa";
import { IoHandLeftSharp } from "react-icons/io5";
import { MdThumbUp } from "react-icons/md";
import { getNameByCategoryID } from "../../../api/post";
import CardBox from "../CardBox";
import { CardButton } from "../CardButton";
import CommentBubble from "../../CommentBubble/CommentBubble";
import { Button } from "@chakra-ui/button";


const GiveHelpCard = ({ post, isProfile }) => {


  return (
    <CardBox>
      <Flex w={"100%"} p={["4", "8"]} bgColor="white">
        <Avatar src={post.user.profile_pic} w={["40px", "48px"]} h={["40px", "48px"]} />
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
      {post.picture !== "" && (<Image

        src={`https://apis.covhelp.online/v1/posts/file/${post.picture}`}
        objectFit="cover"
        color="gray.600"
        ml='auto' mr="auto"
        alt=""
      />)
      }

      <Box p={["4", "8"]} pt={post.picture === "" && ["0", "0"]} bgColor="white">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" py="1" colorScheme="red">
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
          noOfLines={[3, 4]}
        >

          <div dangerouslySetInnerHTML={{ __html: post.body.replaceAll('\n', '<br/>') }} />
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm">
            {/* {card.reviewCount} reviews */}
          </Box>
        </Box>

        {isProfile !== "true" && (
          <>
            <hr />
            <Grid templateColumns="repeat(3, 1fr)" >
              <CardButton name="Like" icon={MdThumbUp} />
              <CardButton icon={IoHandLeftSharp} name="I need help" />
              <CardButton icon={FaComment} name="Comment" />
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
          
          <Button colorScheme="messenger" borderRadius="lg" px={[6,8]} ml={2}>Post</Button>

        </InputGroup>

        <CommentBubble name="So" date="4/20/69" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis" />


        <CommentBubble name="Light" date="4/20/69" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />


        <CommentBubble name="Em" date="4/20/69" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, " />


        <CommentBubble name="Up" date="4/20/69" comment="Lorem ipsum dolor" />



      </Flex>
    </CardBox>
  );
};

export default GiveHelpCard;
