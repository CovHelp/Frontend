import { Avatar } from '@chakra-ui/avatar'
import { Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'

const CommentBubble = (props) => {
    return (
        <>

            <Flex my={1} flexDir="column" bgColor="rgb(245,245,245)" borderRadius="lg" maxW={["100%", "95%"]} h="auto" p={[2, 3]}>
                <Flex alignItems="center">
                    <Avatar w={["20px", "28px"]}
                        h={["20px", "28px"]}
                        mr={2} />
                    <Heading fontSize="md">{props.name}</Heading>
                </Flex>
                <Text noOfLines={[4, 5, 6]} mt={2}>{props.comment}</Text>

            </Flex>
        </>
    )
}

export default CommentBubble
