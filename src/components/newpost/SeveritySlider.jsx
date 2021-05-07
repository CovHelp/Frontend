import { FormLabel } from "@chakra-ui/form-control"
import { Flex } from "@chakra-ui/layout"
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/slider"
import React from 'react'

export const SeveritySlider = () => {
    const [value, setValue] = React.useState(1)
    const handleChange = (value) => setValue(value)

    return (
        <Flex direction="column" m={2}>
            <FormLabel>Urgency level</FormLabel>
            {/* <NumberInput maxW="100px"  value={value} onChange={handleChange}>
                 <NumberInputField /> */}
            {/* <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper> 
            </NumberInput>*/}
            <Slider flex="1" min={1} max={3}  focusThumbOnChange={false} value={value} onChange={handleChange}>
                <SliderTrack>
                    <SliderFilledTrack bg={value === 2 ? 'orange' : 'red'} />
                </SliderTrack>
                <SliderThumb fontSize="sm" boxSize="32px" children={value} />
            </Slider>
        </Flex>
    )
}