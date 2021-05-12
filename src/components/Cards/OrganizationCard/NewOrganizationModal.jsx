import { Button } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Image } from '@chakra-ui/image'
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input'
import { Box, Flex, Stack } from '@chakra-ui/layout'
import React, { useEffect, useRef, useState } from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { useSelector } from 'react-redux'
import { DefaultEditor } from 'react-simple-wysiwyg'
import { createOrganization, uploadImage, uploadOrgImage } from '../../../api/post'
import StateCitySelctor from '../../newpost/StateCitySelector'


const NewOrganization = (props) => {

    const [name, setName] = useState(null)
    const [body, setBody] = useState(null);
    const [category, setCategory] = useState(null);
    const [loader, setLoader] = useState(false);
    const [website, setWebsite] = useState(null);
    const [contact, setContact] = useState(null);
    const [donationMedium, setDonationMedium] = useState(null)
    // IMAGE  UPLOAD
    const fileRef = useRef();
    const imgRef = useRef();
    const [isImgSelected, setImgSelected] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [uploadLoader, setUploadLoader] = useState()
    const [uploadedImageId, setUploadedImageId] = useState("");
    /* LOCATION */
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [stateCitySelectorVisible, setStateCitySelectorVisible] = useState(true);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);

    const userStore = useSelector((store) => store.userStore);
    /* SET NAME */
    const handleSetName = (e) => {
        setName(e.target.value)
    }
    /* SET BODY */
    const handleSetBody = (e) => {
        setBody(e.target.value)
    }
    /* SET DONATION MEDIUM */
    const handleSetDonationMedium = (e) => {
        setDonationMedium(e.target.value)
    }
    /* SET CONTACT MEDIUM */
    const handleSetContact = (e) => {
        setContact(e.target.value)
    }

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
            const fileId = await uploadOrgImage({
                image: selectedFile,
                token: userStore.token.token
            });
            setUploadedImageId(fileId);
            setUploadLoader(false)
        } catch (e) {
            setUploadLoader(false)
            console.log(e);
        }
    };

    /* HANDLE SETTING OF WEBSITE */
    const handleSetWebsite = (e) => {
        setWebsite(e.target.value)
    }

    /* HANDLE CATEGORY */
    const handleSetCategory = (e) => {
        setCategory(e.target.value)
    }

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


    const handleCreateOrganization = async () => {
        if (city === null || state === null) return
        setLoader(true);
        try {
            await createOrganization
                ({
                    token: userStore.token.token,
                    name: name,
                    address: body,
                    category: category.split(","),
                    contact: contact,
                    image: uploadedImageId,
                    locations: selectedLocations,
                    website: website,
                    donation: donationMedium,
                });
                props.onClose();
        }
        catch (e) {
            // here
            setLoader(false);
            console.log(e.response);
        }
    }

    // useEffect(() => {
    //     console.log("-----------START-----------")
    //    console.log("name", name);
    //    console.log("locations", selectedLocations.length);
    //    console.log("website", website)
    //    console.log("body", body);
    //    console.log("ddon", donationMedium)
    //    console.log("contact", contact);
    //     console.log('\n');
    // })
    return (
        <>
            <Flex minH={"50vh"} align={"center"} justifyContent={"center"}>
                <Stack width={"md"}>
                    <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")}>
                        <Stack spacing={4} my={2}>

                            <FormControl id="name">
                                <FormLabel>Enter Name</FormLabel>
                                <Input placeholder="Organization Name" type="name" value={name} onChange={(e) => handleSetName(e)} />
                            </FormControl>

                            <FormControl id="name">
                                <FormLabel>Enter Category </FormLabel>
                                <Input placeholder="Oxygen , Hospital ,Food" type="name" value={category} onChange={(e) => handleSetCategory(e)} />
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
                                    onChange={(e) => handleSetBody(e)}
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
                                <Button onClick={() => setStateCitySelectorVisible(true)}>
                                    Add More Locations
                                    </Button>
                            }

                            {stateCitySelectorVisible &&
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

                                <Input type="name" placeholder="Donation Medium" value={donationMedium} onChange={(e) => handleSetDonationMedium(e)} />
                            </FormControl>


                            <FormControl id="Contact">
                                <FormLabel>Contact</FormLabel>

                                <InputGroup mb={2}>

                                    <Input
                                        border={"2px"}
                                        type="text"
                                        value={contact}
                                        onChange={(e) => handleSetContact(e)}
                                        placeholder={"Enter Any Contact info"}
                                    />
                                </InputGroup>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Enter Website</FormLabel>
                                <InputGroup size="sm">
                                    <InputLeftAddon children="https://" />
                                    <Input placeholder="mysite" value={website} onChange={(e) => handleSetWebsite(e)} />
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
                            {name && website && contact && donationMedium && selectedLocations.length > 0 &&
                                <Button
                                    isLoading={loader}
                                    onClick={handleCreateOrganization}
                                    bg="messenger.500"
                                    color={"white"}
                                    borderRadius="lg"

                                >
                                    Post
                            </Button>}
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}

export default NewOrganization
