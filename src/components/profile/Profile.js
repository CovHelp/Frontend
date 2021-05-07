import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { BiEdit } from "react-icons/all";
import { Link } from "react-router-dom";
import NeedHelp from "../../pages/NeedHelp/NeedHelp";
import GiveHelp from "../../pages/GiveHelp/GiveHelp";
import { useSelector } from "react-redux";

function Profile() {
  const [active, setActive] = useState(true);
  const [activeProvide, setActiveProvide] = useState(false);
  const userStore = useSelector((store) => store.userStore);

  useEffect(() => {
    console.log(active);
  }, []);
  function handleNeedHelp() {
    setActiveProvide(false);
    setActive(true);
  }

  function handleProvideHelp() {
    setActive(false);
    setActiveProvide(true);
  }

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
        px="3"
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
          <Box w="100%" px="16px" mb="8px" mt="32px" display="flex" alignItems="center">
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
              <Link to="/settings">
                <Button size="xs" mt="6px" colorScheme="linkedin">
                  <BiEdit /> <Text ml="3px">Edit Profile</Text>
                </Button>
              </Link>
            </Box>
          </Box>

        <Box 
            maxW="700px"
            w="100%"
            px={["4", "4", "3", "4", "0"]}
        >
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
        {active ? <NeedHelp /> : <GiveHelp />}
        </Stack>
      </Box>
    </>
  );
}

export default Profile;
