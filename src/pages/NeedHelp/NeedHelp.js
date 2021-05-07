import { Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { getNeedHelpPosts } from "../../api/post";
import NeedHelpCard from "../../components/Cards/NeedHelpCard/NeedHelpCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const NeedHelp = () => {
  const [posts, setPosts] = useState([]);

  const loadNeedHelpPosts = async () => {
    try{
    const res = await getNeedHelpPosts();
    setPosts(res.reverse());
    }catch(e){}
  };

  useEffect(() => {
  }, [posts])

  useEffect(() => {
    loadNeedHelpPosts();
  }, []);

  return (
    <>
      <Box
        px={3}
        d="flex"
        flexDir={"column"}
        alignItems={"center"}
        background="#f0f2f5"
      >
        <SearchBar name="Request Help" />
        {posts.length > 0 && posts.map((post) => (
          <NeedHelpCard key={post.id} post={post}/>
        ))}
      </Box>
    </>
  );
};

export default NeedHelp;
