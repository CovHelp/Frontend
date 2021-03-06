import { Avatar, Box, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { BiEdit } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import {
  // getNeedHelpPosts,
  getNeedHelpPostsByUser,
  getProvideHelpPostsByUser,
} from "../../api/post";
import GiveHelpCard from "../Cards/GiveHelpCard/GiveHelpCard";
import NeedHelpCard from "../Cards/NeedHelpCard/NeedHelpCard";

const Profile = () => {
  const [active, setActive] = useState(true);
  const [activeProvide, setActiveProvide] = useState(false);
  const userStore = useSelector((store) => store.userStore);
  const dispatch = useDispatch();
  const [needHelpPosts, setNeedHelpPosts] = useState([]);
  const [provideHelpPosts, setProvideHelpPosts] = useState([]);

  const loadNeedHelpPosts = async () => {
    console.log("FETCHING USER NEED POSTS");
    try {
      const res = await getNeedHelpPostsByUser({
        token: userStore.token.token,
      });
      setNeedHelpPosts(res);

      dispatch({ type: "SAVE_USER_NEED_HELP_POSTS", payload: res });
    } catch (e) {}
  };

  const loadProvideHelpPosts = async () => {
    console.log("FETCHING USER PROVIDE POSTS");

    try {

      const res = await getProvideHelpPostsByUser({
        token: userStore.token.token,
      });
      setProvideHelpPosts(res);
      console.log(res);
      dispatch({ type: "SAVE_PROVIDE_NEED_HELP_POSTS", payload: res });
    } catch (e) {}
  };

  useEffect(() => {
    loadNeedHelpPosts();
    loadProvideHelpPosts();
     // eslint-disable-next-line
  }, []);

  const handleNeedHelp = () => {
    setActiveProvide(false);
    setActive(true);
  };

  const handleProvideHelp = () => {
    setActive(false);
    setActiveProvide(true);
  };

  if (
    userStore.token === null ||
    userStore.token === undefined ||
    !userStore.token
  ) {
    return <div>Unauthenticated</div>;
  }
  return (
    <>
      <Box
        d="flex"
        flexDir={"column"}
        alignItems={"center"}
        background="#f0f2f5"
      >
        <Stack
          w="100%"
          maxW="750px"
          h="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          px={["0", "0"]}
        >
          <Box
            w="100%"
            px="16px"
            mb="8px"
            mt="32px"
            display="flex"
            alignItems="center"
          >
            {userStore.user.profile_pic ? (
              <Avatar
                height="5rem"
                width="5rem"
                src={userStore.user.profile_pic}
              />
            ) : (
              <Avatar
                height="5rem"
                width="5rem"
                src="https://bit.ly/broken-link"
              />
            )}
            <Box pl="10px">
              <Text fontSize="md" fontWeight="500">
                {userStore.user.firstName && userStore.user.firstName}{" "}
                {userStore.user.lastName && userStore.user.lastName}
              </Text>
              <Text fontSize="sm" fontWeight="400">
                {userStore.user.email && userStore.user.email}
              </Text>
              {/* <Link to="/settings">
                <Button size="xs" mt="6px" colorScheme="linkedin">
                  <BiEdit /> <Text ml="3px">Edit Profile</Text>
                </Button>
              </Link> */}
            </Box>
          </Box>

          <Box maxW="700px" w="100%" px={["4", "4", "3", "4", "0"]}>
            <Box
              w="100%"
              h="50px"
              borderTopRadius="16px"
              display="flex"
              bg="#fff"
              mt={8}
            >
              <Box
                cursor="pointer"
                flex="0.5"
                style={{ position: "relative" }}
                onClick={handleNeedHelp}
                textAlign="center"
              >
                <Text mt={1} fontSize="md" fontWeight="500" p={2}>
                  Need Help
                </Text>
                {active && (
                  <div
                    style={{
                      left: "0",
                      bottom: "0",
                      width: "100%",
                      position: "absolute",
                      height: "5px",
                      backgroundColor: "#0078ff",
                      borderRadius: "8px",
                    }}
                  />
                )}
              </Box>
              <Box
                cursor="pointer"
                flex="0.5"
                textAlign="center"
                style={{ position: "relative" }}
                onClick={handleProvideHelp}
              >
                <Text mt={1} fontSize="md" fontWeight="500" p={2}>
                  Provide Help
                </Text>
                {activeProvide && (
                  <div
                    style={{
                      width: "100%",
                      left: "0",
                      bottom: "0",
                      position: "absolute",
                      height: "5px",
                      backgroundColor: "#0078ff",
                      borderRadius: "8px",
                    }}
                  />
                )}
              </Box>
            </Box>
          </Box>
          {active ? (
            <Box
              w="100%"
              px={3}
              d="flex"
              flexDir={"column"}
              alignItems={"center"}
              background="#f0f2f5"
            >
              {needHelpPosts.length > 0 &&
                needHelpPosts.map((post) => (
                  <NeedHelpCard key={post.id} post={post} isProfile="true" />
                ))}
            </Box>
          ) : (
            <Box
              w="100%"
              px={3}
              d="flex"
              flexDir={"column"}
              alignItems={"center"}
              background="#f0f2f5"
            >
              {provideHelpPosts.length > 0 &&
                provideHelpPosts.map((post) => (
                  <GiveHelpCard key={post.id} post={post} isProfile="true" />
                ))}
            </Box>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default Profile;
