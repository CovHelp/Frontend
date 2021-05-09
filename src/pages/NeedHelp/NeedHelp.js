import { Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { getNeedHelpPosts } from "../../api/post";
import NeedHelpCard from "../../components/Cards/NeedHelpCard/NeedHelpCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";

const NeedHelp = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const needHelpPostStoreFiltered = useSelector((store) => store.needHelpPostStoreFiltered);

  const loadNeedHelpPosts = async () => {
    try {
      const res = await getNeedHelpPosts();
      dispatch({ type: "SAVE_NEED_HELP_POSTS", payload: res });
      dispatch({ type: "SAVE_NEED_HELP_POSTS_FILTERED", payload: res });

      setPosts(res);
    } catch (e) {}
  };

  useEffect(() => {}, [posts]);

  useEffect(() => {
    loadNeedHelpPosts();
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
        <SearchBar name="Request Help" />
        {needHelpPostStoreFiltered.length > 0 &&
          needHelpPostStoreFiltered.map((post, index) => (
            <NeedHelpCard key={index} post={post} />
          ))}
      </Box>
    </>
  );
};

export default NeedHelp;
