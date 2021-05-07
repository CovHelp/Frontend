import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Flex, Grid, Heading } from "@chakra-ui/layout";
import { IoMdShareAlt } from "react-icons/io";
import { IoHandLeftSharp } from "react-icons/io5";
import { MdThumbUp } from "react-icons/md";
import CardBox from "../CardBox";
import { CardButton } from "../CardButton";

const CardButtons = (props) => {
  return (
    <Button background="transparent">
      <Flex
        flexDir={["column", "column", "column", "column", "row"]}
        alignItems="center"
        justifyContent="center"
        minH="1rem"
      >
        <Icon mr={2} ml={2} w={[5, 6]} h={[5, 6]} as={props.icon} />
        {props.name}
      </Flex>
    </Button>
  );
};

const GiveHelpCard = ({post , isProfile}) => {
  const card = {
    id: 1,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    type: 1,
    urgency: "urgency",
    body:
      "Modern home in city center in the heart of historic Los Angeles Modern home in city center in the heart of historic Los AngelesModern home in city center in the heart of historic Los AngelesModern home in city center in the heart of historic Los AngelesModern home in city center in the heart of historic Los AngelesModern home in city center in the heart of historic Los Angeles",
    picture: "https://bit.ly/2Z4KKcF",
    category: 3,
    isClosed: 2,
    lat: "asd",
    long: "asa",
    user: {
      id: 1,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      firstName: "Firstname",
      LastName: "Lastname",
      email: "asidjwef",
      token: "093284029384023",
      profile_pic: "Picture",
    },
    comment: [
      {
        id: 1,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        comment: "very noice",
      },
    ],
  };

  return (
    <CardBox>
      <Flex w={"100%"} p={["4", "8"]} bgColor="white">
        <Avatar
          w={["40px", "48px"]}
          h={["40px", "48px"]}
        />
        <Flex flexDir="column" _dark="true" ml={["2", "4"]}>
          <Heading as="h6" size="sm">
            {card.user.firstName} {card.user.LastName}
          </Heading>
          <Box>
            {card.createdAt} &bull;
                <Badge
              borderRadius="full"
              px="2"
              ml={1}
              mb={1}
              colorScheme="red"
            >
              {card.type} {/* URGENCY */}
            </Badge>
          </Box>
        </Flex>
      </Flex>
      <Image
        src={card.picture}
        objectFit="cover"
        color="gray.600"
        alt={card.imageAlt}
      />

      <Box p={["4", "8"]} bgColor="white">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="red">
            {card.urgency} {/* URGENCY */}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {card.category} category &bull; {card.baths} baths
            </Box>
        </Box>

        <Box
          mt="2"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={[1, 2, 3, 4]}
        >
          {card.body}
        </Box>

        <Box>
          {card.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            {card.isClosed} -- Is closed
            </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" color="gray.600" fontSize="sm">
            {/* {card.reviewCount} reviews */}
          </Box>
        </Box>

        {isProfile !== 'true' &&
          <>
            <hr />
            <Grid pt={["4", "8"]} templateColumns="repeat(3, 1fr)" gap={2}>
              <CardButton name="Like" icon={MdThumbUp} />
              <CardButton icon={IoHandLeftSharp} name="I need help" />
              <CardButton icon={IoMdShareAlt} name="Appreciate" />
            </Grid>
          </>
        }
      </Box>
    </CardBox>
  );
};

export default GiveHelpCard;
