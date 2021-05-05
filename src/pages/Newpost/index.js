import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Select, Stack, Textarea, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import StateCitySelctor from '../../components/newpost/StateCitySelector';
export default function NewPost() {
    return (
        <Flex
            minH={['100vh', '50vh']}
            align={'center'}
            justify={'center'}
            pt={4}>
            <Stack width={'lg'} py={12} >
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'2xl'}
                    p={8}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>New Post</Heading>
                    </Stack>

                    <Stack spacing={4} my={4}>

                        <FormLabel>Select Category</FormLabel>
                        <Select placeholder="Select Category">
                            <option value="1">Oxygen</option>
                            <option value="2">Cylinder</option>
                            <option value="3">Remedisver</option>
                        </Select>


                        <FormControl id="text">
                            <FormLabel>Enter</FormLabel>
                            <Textarea />
                        </FormControl>

                        <StateCitySelctor />

                        <Checkbox py={4} outline="none">Share My Phone Number</Checkbox>


                        <FormControl id="text" _disabled={false}>
                            <FormLabel>Phone Number</FormLabel>
                            <Input type="number" />
                        </FormControl>

                        <Button
                            border='1px'
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.400',
                            }}>
                            Post
                        </Button>

                    </Stack>

                </Box>
            </Stack>
        </Flex >
    )
}
