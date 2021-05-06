import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Flex } from '@chakra-ui/layout'
import React from 'react'

export const CardButton = (props) => {

    return (
        <Button background="transparent">
        <Flex flexDir={["column", "column", "column", "column", "row"]} alignItems="center" justifyContent="center" minH="1rem">
                <Icon mr={2} ml={2}
                    w={[5, 6]} h={[5, 6]} as={props.icon} size={props.size} />
          {props.name}
        </Flex>
      </Button>
    )
  }