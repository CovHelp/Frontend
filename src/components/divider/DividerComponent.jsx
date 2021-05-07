import { Box } from '@chakra-ui/layout'
import React from 'react'

export const DividerComponent = (props) => {
    return (
            <Box
                style={{marginTop: 16}}
                height={props.height || 0}
                width={props.width || "100%"}
                borderTopColor={props.color || 'telegram'}
                borderTopWidth={props.borderWidth || 1}
                margin={props.margin || 0}
                padding={props.padding || 0}
            />
    )
}
