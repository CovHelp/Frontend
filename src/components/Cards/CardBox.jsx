import { Box, Flex } from "@chakra-ui/layout"

const CardBox = (props) => {
    return (
        
        <Flex
            // m={2}
            w={"auto"}
            maxW={"700px"}
            minW="auto"
            justifyContent="center"
            alignItems="center"
            h="auto">
            <Box
                borderRadius={"xl"}
                maxW="-moz-max-content"
                mt={1}
                w="auto"
                borderWidth="1px"
                overflow="hidden">
                    {props.children}
            </Box>
        </Flex>
    )
}

export default CardBox


// <Avatar />
//           <Flex flexDir="column" _dark="true" ml="4">
//             <Heading as="h6" size="sm">
//               {card.user.firstName} {card.user.LastName}
//             </Heading>
//             <Box>
//               {card.createdAt} &bull;
//                 <Badge
//                 borderRadius="full"
//                 px="2"
//                 ml={1}
//                 mb={1}
//                 colorScheme="red"
//               >
//                 {card.type} {/* URGENCY */}
//               </Badge>
//             </Box>
//           </Flex>