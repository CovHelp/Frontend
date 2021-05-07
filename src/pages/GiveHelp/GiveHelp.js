import { Box } from "@chakra-ui/layout";
import React from "react";
import GiveHelpCard from "../../components/Cards/GiveHelpCard/GiveHelpCard";
import MainHeading from "../../components/MainHeading/MainHeading";
import SearchBar from "../../components/SearchBar/SearchBar";
import {useDispatch} from 'react-redux'

const GiveHelp = () => {
  return (
    <>

    <Box
    w="100%"
      px={3}
      d="flex"
      flexDir={"column"}
      alignItems={"center"}
      background="#f0f2f5"
    >
      <SearchBar name = "Provide Help"/>
      <GiveHelpCard />
      <GiveHelpCard />
      <GiveHelpCard />
      <GiveHelpCard />
      <GiveHelpCard />
      <GiveHelpCard />
      <GiveHelpCard />
      <GiveHelpCard />

    </Box>
    </>
  );
};

export default GiveHelp;
