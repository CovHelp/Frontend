import { Box, Flex } from "@chakra-ui/layout"

const CardBox = (props) => {
    return (
        <Flex
            m={2}
            w={["100%"]}
            maxW="700px"
            border={"1px"}
            h="auto">
            <Box
                borderRadius={"xl"}
                maxW="-moz-max-content"
                mt={1}
                w={"100%"}
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