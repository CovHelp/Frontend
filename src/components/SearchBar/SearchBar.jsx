import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input, InputGroup } from '@chakra-ui/input'
import { Box, Heading } from '@chakra-ui/layout'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import React from 'react'



const SearchBar = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef()

    const CreatePostModal = () => {
        return (
            <>
                <ModalOverlay />
                <ModalContent backgroundColor>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* <NewPost/> */}
                        bruhhh
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="messenger" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        {/* <Button variant="ghost">Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </>
        );
    }

    return (
        <>
            <Box
                w={['100%']}
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
                background="white">

                <Heading
                    fontSize={["1.5rem","2rem"]}
                    fontWeight="semibold"
                    color="#0078ff"
                    mb={["2", "4"]}
                >
                    {props.name}
                </Heading>

                <InputGroup
                    d="flex"
                    alignItems="center"
                    justifyContent="center"
                    dir="row">
                    {/* <InputLeftElement
                    pointerEvents="none"
                    children={<AiOutlineSearch color="gray.300" size='1rem' />}
                /> */}

                    <Avatar
                        w={["40px","48px"]}
                        h={["40px","48px"]}
                        mr={["2", "4"]} />


                    <Input
                        type="text"
                        placeholder="So what's on your mind"
                        borderRadius={"lg"}
                        onFocus={onOpen}
                        bgColor="rgb(245,245,245)" />

                </InputGroup>

            </Box>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <CreatePostModal />
            </Modal>
        </>
    )
}

export default SearchBar
