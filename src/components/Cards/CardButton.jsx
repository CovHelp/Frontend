import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Flex } from '@chakra-ui/layout'
import React from 'react'

export const CardButton = (props) => {

    return (
        <Button maxW="100%" background="transparent">
        <Flex flexDir="column" alignItems="center" justifyContent="center" minH="1rem">
                <Icon 
                    w={[5, 6]} h={[5, 6]} as={props.icon} size={props.size} />
          {props.name}
        </Flex>
      </Button>
    )
  }