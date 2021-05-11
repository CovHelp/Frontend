import { Button } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Stack } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import { Textarea } from '@chakra-ui/textarea'
import React, { useRef, useState } from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { uploadImage } from '../../../api/post'


const NewOrganization = () => {


    const [body, setBody] = useState("");

    // IMAGE  UPLOAD
    const fileRef = useRef();
    const imgRef = useRef();
    const [isImgSelected, setImgSelected] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [uploadLoader, setUploadLoader] = useState()
    const [uploadedImageId, setUploadedImageId] = useState("");

    /* IMAGEUPLOAD */
    const handleImageFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setImgSelected(true);
        imgRef.current.src = URL.createObjectURL(e.target.files[0]);
    };

    const handleImageUpload = async () => {
        setUploadLoader(true)
        console.log(selectedFile);
        try {
            const fileId = await uploadImage({
                file: selectedFile,
                //token: userStore.token.token
            });
            setUploadedImageId(fileId);
            setUploadLoader(false)
        } catch (e) {
            setUploadLoader(false)
            console.log(e);
        }
    };


    return (
        <>
            <Flex minH={"50vh"} align={"center"} justifyContent={"center"}>
                <Stack width={"md"}>
                    <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")}>
                        <Stack spacing={4} my={2}>

                            <FormControl id="Category"
                            //isInvalid={categoryEditing && categoryError}
                            //onFocus={() => setcategoryEditing(true)}
                            >
                                <FormLabel>Select Category </FormLabel>

                                <Select
                                    border={"2px"}
                                    placeholder={""}//category === "" ? "Select Cateogry" : ''}
                                // onChange={(e) => handleCategoryChange(e)}
                                >

                                    <option value="1">Oxygen</option>
                                    <option value="2">Ambulance</option>
                                    <option value="3">Medicine</option>
                                    <option value="4">Hospital Beds</option>
                                    <option value="5">Plasma</option>
                                    <option value="6">Food And Tiffin</option>
                                </Select>
                            </FormControl>

                            <FormControl id="Data"
                            //   isInvalid={bodyEditing && bodyError}
                            //onFocus={() => setbodyEditing(true)}
                            >
                                <FormLabel>Enter Details</FormLabel>
                                <Textarea
                                    minH="150px"
                                    h="auto"
                                    value={body}
                                //onChange={(e) => handleSetBody(e)}
                                />
                            </FormControl>


                            <FormControl id="img">
                                <FormLabel>Upload Image</FormLabel>
                                <Flex m={0} pt={0} flexDir="column" w="100%" justifyContent="center" borderRadius="lg">


                                    <Box as="label" borderRadius="lg" backgroundColor="whitesmoke">
                                        <Image
                                            ref={imgRef}
                                            alt="img"
                                            borderRadius="lg"
                                            h={isImgSelected ? -10 : 'auto'}
                                            visibility={isImgSelected ? "visible" : "hidden"}
                                        />
                                        {!isImgSelected &&
                                            <Flex justifyContent="center" alignItems="center"  > <BsCloudUpload color="messenger.500" size="40px" /> </Flex>}
                                        <Input
                                            style={{ visibility: "hidden" }}
                                            ref={fileRef}
                                            h={0}
                                            onChange={handleImageFileChange}
                                            type="file"
                                        />
                                    </Box>
                                    {isImgSelected &&
                                        <Button background={uploadedImageId ? "whatsapp.500" : "messenger.500"} color="white" onClick={handleImageUpload} isLoading={uploadLoader}> {uploadedImageId ? "UPLOADED" : "UPLOAD"}   </Button>
                                    }
                                </Flex>
                            </FormControl>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}

export default NewOrganization
