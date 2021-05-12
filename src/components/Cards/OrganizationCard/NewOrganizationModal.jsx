import { Button } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Image } from '@chakra-ui/image'
import { Input, InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/input'
import { Box, Flex, Stack } from '@chakra-ui/layout'
import React, { useRef, useState } from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { DefaultEditor } from 'react-simple-wysiwyg'
import { uploadImage } from '../../../api/post'
import StateCitySelctor from '../../newpost/StateCitySelector'


const NewOrganization = () => {


    const [body, setBody] = useState("");
    const [stateCitySelectorVisible, setStateCitySelectorVisible] = useState(
        true
    );
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);

    // IMAGE  UPLOAD
    const fileRef = useRef();
    const imgRef = useRef();
    const [isImgSelected, setImgSelected] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [uploadLoader, setUploadLoader] = useState()
    const [uploadedImageId, setUploadedImageId] = useState("");
    const [selectedLocations, setSelectedLocations] = useState([]);

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


    /* HANDLE DELETION OF LOCATIONS */
    const handleDeleteLocation = (city) => {
        const filteredLocationsList = selectedLocations.filter(
            (location) => location.city.name !== city
        );
        setSelectedLocations(filteredLocationsList);
        if (filteredLocationsList.length === 0) {
            setStateCitySelectorVisible(true);
        }
    };

    /* HANDLE SETTING  OF LOCATIONS */
    const handleLocationSelection = (city, state) => {
        setState(state);
        setCity(city);
        setSelectedLocations((selectedLocations) => [
            ...selectedLocations,
            { state: state, city: city },
        ]);
        setStateCitySelectorVisible(false);
    };



    return (
        <>
            <Flex minH={"50vh"} align={"center"} justifyContent={"center"}>
                <Stack width={"md"}>
                    <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")}>
                        <Stack spacing={4} my={2}>

                            <FormControl id="name">
                                <FormLabel>Enter Name</FormLabel>
                                <Input type="name" />
                            </FormControl>


                            <FormControl id="Data"
                                mb={3}
                            //   isInvalid={bodyEditing && bodyError}
                            //onFocus={() => setbodyEditing(true)}
                            >
                                <FormLabel>Enter Address</FormLabel>
                                <DefaultEditor
                                    minH="150px"
                                    h="auto"
                                    value={body}
                                //onChange={(e) => handleSetBody(e)}
                                />
                            </FormControl>

                            <Flex direction="column">
                                <FormLabel>Locations</FormLabel>
                                {selectedLocations.map((location, index) => (
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            backgroundColor: "#edf2f7",
                                            padding: "8px",
                                            paddingLeft: "16px",
                                            paddingRight: "16px",
                                            marginTop: "8px",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        <p>
                                            {" "}
                                            {location.city.name}, {location.state.name}
                                        </p>
                                        <ImCross
                                            onClick={() => handleDeleteLocation(location.city.name)}
                                            cursor="pointer"
                                            size={10}
                                        />
                                    </div>
                                ))}
                            </Flex>

                            {!stateCitySelectorVisible &&
                                // props.typeOfPost === "Provide Help" && (
                                    <Button onClick={() => setStateCitySelectorVisible(true)}>
                                        Add More Locations
                                    </Button>
                                // )
                            }

                            {selectedLocations.length === 0 &&
                                <StateCitySelctor
                                    parent="provideHelp"
                                    onSelected={handleLocationSelection}
                                />
                            }
                            <FormControl id="Donation Medium"
                            //isInvalid={categoryEditing && categoryError}
                            //onFocus={() => setcategoryEditing(true)}
                            >
                                <FormLabel>Donation Medium </FormLabel>

                                <Input type="name" placeholder="Donation Medium" />
                            </FormControl>


                            <FormControl id="Contact">
                                <FormLabel>Contact</FormLabel>

                                <InputGroup mb={2}>

                                    <Input
                                        border={"2px"}
                                        type="number"
                                        // value={phoneNumber}
                                        // onChange={(e) => handlePhoneNumberChange(e)}
                                        // disabled={!shareNumber}
                                        placeholder={"Enter Any Contact info"}
                                    />
                                </InputGroup>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Enter Website</FormLabel>
                                <InputGroup size="sm">
                                    <InputLeftAddon children="https://" />
                                      <Input placeholder="mysite" />
                                </InputGroup>
                            </FormControl>


                            <FormControl id="img">


                                <FormLabel>Cover Photo</FormLabel>
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
                            <Button
                                // isLoading={loader}
                                // onClick={handleCreatePost}   
                                bg="messenger.500"
                                color={"white"}
                                borderRadius="lg"

                            >
                                Post
            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}

export default NewOrganization
