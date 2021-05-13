
import React, { useEffect, useState } from "react";

import { Box } from "@chakra-ui/layout";
import GiveHelpCard from "../../components/Cards/GiveHelpCard/GiveHelpCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getProvideHelpPosts } from "../../api/post";

const GiveHelp = () => {

  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const provideHelpPostStoreFiltered = useSelector((store) => store.provideHelpPostStoreFiltered);

  const loadProvideHelpPosts = async () => {
    try {
      const res = await getProvideHelpPosts();
      dispatch({ type: "SAVE_PROVIDE_HELP_POSTS", payload: res });
      dispatch({ type: "SAVE_PROVIDE_HELP_POSTS_FILTERED", payload: res });

      setPosts(res);
    } catch (e) { }
  };

  useEffect(() => { }, [posts]);

  useEffect(() => {
    loadProvideHelpPosts();
    // eslint-disable-next-line
  }, []);

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
        <SearchBar name="Provide Help" />
        {provideHelpPostStoreFiltered.length > 0 &&
          provideHelpPostStoreFiltered.map((post, index) => (
            <GiveHelpCard key={index} post={post} />
          ))}

      </Box>
    </>
  );
};

export default GiveHelp;
