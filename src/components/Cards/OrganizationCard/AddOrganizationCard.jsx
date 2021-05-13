import { useDisclosure } from '@chakra-ui/hooks'
import { Flex, Heading } from '@chakra-ui/layout'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import NewOrganization from './NewOrganizationModal'


const AddOrganizationCard = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef();


    const CreateOrganizationModal = ({ onClose }) => {
        return (
            <>
                <ModalOverlay style={{ backdropFilter: "blur(5px)" }} />
                <ModalContent>
                    <ModalHeader fontWeight="bold" fontSize="3xl">
                        Add New Organization
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <NewOrganization onClose={onClose} typeOfPost="{props.name}" />
                    </ModalBody>
                </ModalContent>
            </>

        );
    };


    return (
        <>
            <Flex p={3} bgColor="white" borderRadius="xl" h={["auto", "550px"]} border="3px dashed">
                <Flex onClick={onOpen} alignItems="center" justifyContent="center" flexDir="column" _dark=" true" w="100%" minH="400px" maxH="700px" textAlign="center"
                    tabIndex={-1}
                    aria-label="Focus moved to this box"
                    _hover={{
                        transform: "scale(1.1)"
                    }} h="100%">
                    <BsPlusCircle fontSize="60px" />

                    <br /><br />
                    <Heading as={"h3"} fontSize="lg">Add a new Organization</Heading>
                </Flex>
            </Flex>

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <CreateOrganizationModal
                    onClose={() => {
                        onClose();
                        window.location.reload();
                    }}
                />
            </Modal>

        </>
    )
}

export default AddOrganizationCard
