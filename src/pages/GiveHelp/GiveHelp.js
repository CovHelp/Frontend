import { Box } from "@chakra-ui/layout";
import React from "react";
import GiveHelpCard from "../../components/Cards/GiveHelpCard/GiveHelpCard";
import MainHeading from "../../components/MainHeading/MainHeading";

const GiveHelp = () => {
  return (
    <Box
      px={3}
      d="flex"
      flexDir={"column"}
      alignItems={"center"}
      background="#f0f2f5"
    >
      <MainHeading name="Provide Help"/>
      <GiveHelpCard />
      <GiveHelpCard />
      <GiveHelpCard />
      <GiveHelpCard />
      <GiveHelpCard />
      <GiveHelpCard />
      <GiveHelpCard />
      <GiveHelpCard />

    </Box>
  );
};

export default GiveHelp;
