import { Box } from "@chakra-ui/layout";
import React from "react";
import NeedHelpCard from "../../components/Cards/NeedHelpCard/NeedHelpCard";
import MainHeading from "../../components/MainHeading/MainHeading";
import SearchBar from "../../components/SearchBar/SearchBar";

const NeedHelp = () => {
  return (
    <>
      <Box
        px={3}
        d="flex"
        flex="1"
        flexDir={"column"}
        alignItems={"center"}
        background="#f0f2f5"
      >
        <SearchBar name = "Request Help"/>
        <NeedHelpCard />
        <NeedHelpCard />
        <NeedHelpCard />
        <NeedHelpCard />
        <NeedHelpCard />
        <NeedHelpCard />
        <NeedHelpCard />
        <NeedHelpCard />
        <NeedHelpCard />
      </Box>
    </>
  );
};

export default NeedHelp;
