import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'

export const CardButton = (props) => {

  return (

    <Button as={Link} to={props.to} maxW="100%" background="transparent" mt={2} p={6}>
      
        <Flex flexDir="column" alignItems="center" fontSize="14px" justifyContent="center" minH="1rem">
          <Icon color="gray.600"
            w={[5, 6]} h={["16px", "20px"]} as={props.icon} size={props.size} />
          <Text color="gray.600">{props.name}</Text>
        </Flex>
    </Button>

  )
}