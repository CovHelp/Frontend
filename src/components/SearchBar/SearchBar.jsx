import { Avatar } from "@chakra-ui/avatar";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input, InputGroup } from "@chakra-ui/input";
import { Box, Heading } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React from "react";
import { useSelector } from "react-redux";
import NewPost from "../../pages/Newpost/NewPost";

const SearchBar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();

  const userStore = useSelector((store) => store.userStore);

  const CreatePostModal = ({ onClose }) => {
    return (
      <>
        <ModalOverlay style={{ backdropFilter: "blur(5px)" }} />
        <ModalContent>
          <ModalHeader fontWeight="bold" fontSize="3xl">
            {props.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NewPost onClose={onClose} typeOfPost={props.name} />
          </ModalBody>
        </ModalContent>
      </>
    );
  };

  return (
    <>
      <Box
        w={["100%"]}
        maxW="700px"
        textAlign="left"
        mt={4}
        p={["4", "8"]}
        pb={["6", "10"]}
        ref={finalRef}
        tabIndex={-1}
        aria-label="Focus moved to this box"
        borderRadius="xl"
        borderWidth="1px"
        background="white"
      >
        <Heading
          fontSize={["1.5rem", "2rem"]}
          fontWeight="semibold"
          color="#111"
          mb={4}
        >
          {userStore.token && userStore.token.token
            ? props.name
            : "Login to post"}
        </Heading>

        <InputGroup
          d="flex"
          alignItems="center"
          justifyContent="center"
          dir="row"
        >
          <Avatar
            w={["40px", "48px"]}
            h={["40px", "48px"]}
            src={userStore.user && userStore.user.profile_pic}
            mr={["2", "4"]}
          />

          {userStore.token && userStore.token.token && (
            <Input
              type="text"
              placeholder="So what's on your mind"
              borderRadius={"lg"}
              onFocus={onOpen}
              bgColor="rgb(245,245,245)"
            />
          )}

          {
            !userStore.token && (
              <Input
                type="text"
                placeholder="Login to create a post"
                borderRadius={"lg"}
                disabled={true}
                bgColor="rgb(245,245,245)"
              />
            )
          }
        </InputGroup>
      </Box>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <CreatePostModal
          onClose={() => {
            onClose();
            window.location.reload();
          }}
        />
      </Modal>
    </>
  );
};

export default SearchBar;
