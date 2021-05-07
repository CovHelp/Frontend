import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Select, Stack, Textarea, useColorModeValue } from '@chakra-ui/react';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/slider";
import React, { useEffect, useState } from 'react';
import { BoilerPlateForGiveHelp, BoilerPlateForNeedHelp } from '../../components/newpost/BoilerPlate';
import StateCitySelctor from '../../components/newpost/StateCitySelector';

const NewPost = (props) => {

    const [category, setCategory] = useState(0);
    const [shareNumber, setshareNumber] = useState(true)
    const [sliderValue, setSliderValue] = useState(1)
    const [phoneNumber, setPhoneNumber] = useState('Enter Number')
    const [body, setBody] = useState('')
    const handleCategoryChange = (e) => {
        setCategory(e.target.value - 1);

        setBody(props.typeofPost === "Request Help" ? BoilerPlateForNeedHelp[e.target.value - 1] : BoilerPlateForGiveHelp[e.target.value - 1]);
    }
    const handleSLiderChange = (val) => setSliderValue(val);
    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
    const handleSetBody = (e) => setBody(e.target.value);


    useEffect(() => {
        console.log(props.typeofPost);
    }, [props])
    
    // PHONE NUMBER LESS THAN 10
    const handleIncorrectNumber = () => {
        var phoneNumberResponse = phoneNumber.toLocaleString.length < 10 ? false : true
        return phoneNumberResponse
    }

    return (
        <Flex
            minH={'50vh'}
            align={'center'}
            justifyContent={'center'}>
            <Stack width={'md'}>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}

                >

                    <Stack spacing={4} my={2}>

                        {/* <span>bitchh {category} |
                       urgency {sliderValue} | phone {phoneNumber} | body {body}</span> */}

                        <FormControl id="Category">
                            <FormLabel>{props.typeofPost}</FormLabel>

                            <Select
                                isRequired
                                placeholder="Select Category"
                                border={'2px'}
                                onChange={(e) => handleCategoryChange(e)}>

                                <option value="1">Oxygen</option>
                                <option value="2">Ambulance</option>
                                <option value="3">Medicine</option>
                                <option value="4">Hospital Beds</option>
                                <option value="5">Plasma</option>
                                <option value="6">Food And Tiffin</option>
                            </Select>
                        </FormControl>


                        <FormControl id="Data">
                            <FormLabel>Enter Details</FormLabel>
                            <Textarea border={'2px'}
                                height="auto"
                                value={body}
                                onChange={(e) => handleSetBody(e)} />
                        </FormControl>

                        <StateCitySelctor />


                        {props.typeofPost === "Request Help" &&
                            

                            <Flex direction="column" m={2}>

                                <FormLabel>
                                    Urgency level
                            </FormLabel>

                                <Slider flex="1" min={1} max={3}
                                    focusThumbOnChange={false}
                                    sliderValue={sliderValue}
                                    defaultValue={0}
                                    onChange={handleSLiderChange}>

                                    <SliderTrack>
                                        <SliderFilledTrack defaultValue={0} bg={sliderValue === 2 ? 'orange' : 'red'} />
                                    </SliderTrack>
                                    <SliderThumb fontSize="sm" boxSize="32px" children={sliderValue} />
                                </Slider>
                            </Flex>


                        }
                        <Checkbox pt={2} outline="none"
                            defaultIsChecked
                            onChange={() => setshareNumber(!shareNumber)}>
                            Share My Phone Number</Checkbox>



                        {shareNumber &&
                            <FormControl id="phone Number">
                                <FormLabel>
                                    Phone Number
                            </FormLabel>

                                <InputGroup mb={4}>
                                    <InputLeftAddon children="+91" />

                                    <Input
                                        border={'2px'}
                                        type="number"
                                        value={phoneNumber}
                                        onChange={(e) => handlePhoneNumberChange(e)}
                                        disabled={!shareNumber}
                                        placeholder={'Enter Number'} />
                                </InputGroup>
                            </FormControl>
                        }

                        <Button
                            bg="messenger.500"
                            color={'white'}
                            borderRadius="lg">
                            Post
                        </Button>

                    </Stack>

                </Box>
            </Stack>
        </Flex >
    )
}
export default NewPost;