import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
    Stack,
    Textarea,
    useColorModeValue,
} from "@chakra-ui/react";
import {
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
} from "@chakra-ui/slider";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createNeedHelpPost } from "../../api/post";
import {
    BoilerPlateForGiveHelp,
    BoilerPlateForNeedHelp,
} from "../../components/newpost/BoilerPlate";
import StateCitySelctor from "../../components/newpost/StateCitySelector";

const NewPost = (props) => {
    const [category, setCategory] = useState(0);
    const [shareNumber, setshareNumber] = useState(true);
    const [urgencySliderValue, setUrgencySliderValue] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [locationSliderValue, setLocationSliderValue] = useState(1)

    const [body, setBody] = useState("");
    const [city, setCity] = useState({});
    const [state, setState] = useState({});

    const userStore = useSelector(store => store.userStore);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value - 1);

        setBody(
            props.typeOfPost === "Request Help"
                ? BoilerPlateForNeedHelp[e.target.value - 1]
                : BoilerPlateForGiveHelp[e.target.value - 1]
        );
    };
    const handleLocationSliderChange = (val) => { setLocationSliderValue(val) };
    const handleUrgencySLiderChange = (val) => setUrgencySliderValue(val);
    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
    const handleSetBody = (e) => setBody(e.target.value);
    const handleLocationSelection = (city, state) => {
        console.log(city, state);
        setState(state);
        setCity(city)
    }

    // PHONE NUMBER LESS THAN 10
    const handleIncorrectNumber = () => {
        var phoneNumberResponse =
            phoneNumber.toLocaleString.length < 10 ? false : true;
        return phoneNumberResponse;
    };

    const handleCreatePost = async () => {
        if (props.typeOfPost === 'Request Help') {
            try {
                await createNeedHelpPost({
                    body: body,
                    category: category,
                    phoneNumber: phoneNumber,
                    isPhoneNumberPublic: shareNumber,
                    picture: '',
                    urgency: urgencySliderValue,
                    city: city.name,
                    state: state.name,
                    lat: city.latitude,
                    long: city.longitude,
                    token: userStore.token.token
                })
            } catch (e) {
                console.log("Error")
            }
        } else {

        }
    }

    return (
        <Flex minH={"50vh"} align={"center"} justifyContent={"center"}>
            <Stack width={"md"}>
                <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")}>
                    <Stack spacing={4} my={2}>
                        {/* <span>bitchh {category} |
                         urgency {urgencySliderValue} | phone {phoneNumber} | body {body}</span> */}

                        <FormControl id="Category">
                            <FormLabel>{props.typeOfPost}</FormLabel>

                            <Select
                                isRequired
                                placeholder="Select Category"
                                border={"2px"}
                                onChange={(e) => handleCategoryChange(e)}
                            >
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
                            <Textarea
                                border={"2px"}
                                height="auto"
                                value={body}
                                onChange={(e) => handleSetBody(e)}
                            />
                        </FormControl>



                        {props.typeOfPost === 'Provide Help' &&
                            <Flex direction="column" m={2}>
                                <FormLabel>
                                    Select Number of Locations
                                  </FormLabel>

                                <Slider flex="1" min={1} max={5}
                                    focusThumbOnChange={false}
                                    sliderValue={locationSliderValue}
                                    defaultValue={0}
                                    onChange={handleLocationSliderChange}>

                                    <SliderTrack>
                                        <SliderFilledTrack defaultValue={1} />
                                    </SliderTrack>
                                    <SliderThumb fontSize="sm" boxSize="32px" children={locationSliderValue} />
                                </Slider>
                            </Flex>
                        }


                        <StateCitySelctor onSelected={handleLocationSelection} />
                        {props.typeOfPost}

                        {props.typeOfPost === "Request Help" && (
                            <Flex direction="column" m={2}>
                                <FormLabel>Urgency level</FormLabel>

                                <Slider
                                    flex="1"
                                    min={1}
                                    max={3}
                                    focusThumbOnChange={false}
                                    SliderValue={urgencySliderValue}
                                    defaultValue={0}
                                    onChange={handleUrgencySLiderChange}
                                >
                                    <SliderTrack>
                                        <SliderFilledTrack
                                            defaultValue={0}
                                            bg={urgencySliderValue === 2 ? "orange" : "red"}
                                        />
                                    </SliderTrack>
                                    <SliderThumb
                                        fontSize="sm"
                                        boxSize="32px"
                                        children={urgencySliderValue}
                                    />
                                </Slider>
                            </Flex>
                        )}
                        <Checkbox
                            pt={2}
                            outline="none"
                            defaultIsChecked
                            onChange={() => setshareNumber(!shareNumber)}
                        >
                            Share My Phone Number
              </Checkbox>

                        {shareNumber && (
                            <FormControl id="phone Number">
                                <FormLabel>Phone Number</FormLabel>

                                <InputGroup mb={4}>
                                    <InputLeftAddon children="+91" />

                                    <Input
                                        border={"2px"}
                                        type="number"
                                        value={phoneNumber}
                                        onChange={(e) => handlePhoneNumberChange(e)}
                                        disabled={!shareNumber}
                                        placeholder={"Enter Number"}
                                    />
                                </InputGroup>
                            </FormControl>
                        )}

                        <Button onClick={handleCreatePost} bg="messenger.500" color={"white"} borderRadius="lg">
                            Post
              </Button>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};
export default NewPost;
