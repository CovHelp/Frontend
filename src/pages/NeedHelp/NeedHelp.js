import { Box } from "@chakra-ui/layout";
import React from "react";
import NeedHelpCard from "../../components/Cards/NeedHelpCard/NeedHelpCard";

const NeedHelp = () => {
  return (
    <>
      <Box
        p={3}
        d="flex"
        flex="1"
        flexDir={"column"}
        alignItems={"center"}
        background="#f0f2f5"
      >
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
