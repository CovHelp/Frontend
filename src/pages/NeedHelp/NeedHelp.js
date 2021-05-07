import { Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { getNeedHelpPosts } from "../../api/post";
import NeedHelpCard from "../../components/Cards/NeedHelpCard/NeedHelpCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";

const NeedHelp = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const needPostStore = useSelector((store) => store.needHelpPostStore);

  const loadNeedHelpPosts = async () => {
    try {
      const res = await getNeedHelpPosts();
      dispatch({ type: "SAVE_NEED_HELP_POSTS", payload: res });
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
        {needPostStore.length > 0 &&
          needPostStore.map((post) => (
            <NeedHelpCard key={post.id} post={post} />
          ))}
      </Box>
    </>
  );
};

export default NeedHelp;
