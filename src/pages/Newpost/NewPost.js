import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Select, Stack, Textarea, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import StateCitySelctor from '../../components/newpost/StateCitySelector';
export default function NewPost() {
    const [shareNumber, setshareNumber] = useState(true)
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
                    {/* <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>New Post</Heading>
                    </Stack> */}

                    <Stack spacing={4} my={2}>
                        
                        <FormControl id="Category">
                            <FormLabel>Select Category</FormLabel>
                            <Select placeholder="Select Category" border={'2px'}>
                                <option value="1">Oxygen</option>
                                <option value="2">Ambulance</option>
                                <option value="3">Medicine</option>
                                <option value="4">Hospital Beds</option>
                                <option value="5">Plasma</option>
                                <option value="6">Food And Tiffin</option>
                            </Select>
                        </FormControl>


                        <FormControl id="Data">
                            <FormLabel>Enter</FormLabel>
                            <Textarea border={'2px'} />
                        </FormControl>

                        <StateCitySelctor />

                        <Checkbox pt={2} outline="none" defaultIsChecked onChange={() => setshareNumber(!shareNumber)}>Share My Phone Number</Checkbox>

                        <FormLabel>Phone Number</FormLabel>
                        <FormControl id="phone Number" >

                            <InputGroup mb={4}>
                                <InputLeftAddon children="+91" />
                                <Input border={'2px'} type="number" disabled={!shareNumber} placeholder={!shareNumber ? "Checkbox not selected" : 'Enter Number'} />
                            </InputGroup>
                        </FormControl>

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
