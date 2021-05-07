import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Select, Stack, Textarea, useColorModeValue } from '@chakra-ui/react';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/slider";
import React, { useState } from 'react';
import StateCitySelctor from '../../components/newpost/StateCitySelector';

export default function NewPost() {

    const BodyData = [
        `Patient Name {FROM API} and Age {FROM API} has oxygen level __ and need oxygen cylinder/concentrator urgently at address(optional) || or enter a City Name. And I can reach below mentioned cities for getting help. Please contact me if you can help or refer me to the person that can help.`
        ,
        `Patient Name __ and Age__ require an Ambulance urgently at address(optional)|| or locality || or enter a City Name. Please contact me in the below mentioned number if you can provide help or have information about the one that can provide one. `
        ,
        `Patient Name __ and Age__ require below mentioned medicines. Please contact or share the information where I can get these. I can reach ____(cuty name)__ for acquiring medicines. 
            Medicines Prescribed`
        ,
        "Patient Name __ and Age_ require an urgent ___ bed in a hospital. Please contact me if  you know the availability of hospital beds in City_Names. "
        ,
        "Patient Name __ and Age__ urgently require Blood/Plasma. Please contact me if you can reach this hospital( Where a patient Needs)."
        ,
        "Patient Name __ and Age__ require food and tiffin services. Please contact me if you can provide food and tiffin services. "
    ]

    const [category, setCategory] = useState(0);
    const [shareNumber, setshareNumber] = useState(true)
    const [sliderValue, setSliderValue] = useState(1)
    const [phoneNumber, setPhoneNumber] = useState('Enter Number')
    const [body, setBody] = useState('')
    const handleCategoryChange = (e) => {
        setCategory(e.target.value - 1);
        setBody(BodyData[e.target.value - 1]);
    }
    const handleSLiderChange = (val) => setSliderValue(val);
    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
    const handleSetBody = (e) => setBody(e.target.value);

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
                            <FormLabel>Select Category</FormLabel>

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

                            </FormControl>}

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
