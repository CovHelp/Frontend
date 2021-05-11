import { Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getNeedHelpPostByID, getProvideHelpPostByID } from "../../api/post";
import GiveHelpCard from "../../components/Cards/GiveHelpCard/GiveHelpCard";
import NeedHelpCard from "../../components/Cards/NeedHelpCard/NeedHelpCard";


const PostDetails = () => {
  const [postType, setPostType] = useState(null);
  // eslint-disable-next-line
  const [postID, setPostID] = useState(null);
  const [needHelpPost, setNeedHelpPost] = useState(null);
  const [provideHelpPost, setProvideHelpPost] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    try {
      var postType = window.location.href.split("detail/")[1];
      var postId = postType.split("/")[1];
      postType = postType.split("/")[0];
      setPostID(parseInt(postId));
      setPostType(parseInt(postType));
      
      if (parseInt(postType) === 0) fetchNeedHelpPost(postId);
      else if (parseInt(postType) === 1) fetchProvideHelpPost(postId);
    } catch (e) {
      history.push("/404");
    }
    // eslint-disable-next-line
  },[]);

  const fetchNeedHelpPost = async (id) => {
    try {
      const res = await getNeedHelpPostByID({ postID: id });
      setNeedHelpPost(res[0]);
      setIsLoaded(true);

    } catch (e) {
      console.log(e);
    }
  };

  const fetchProvideHelpPost = async (id) => {
    try {
      const res = await getProvideHelpPostByID({ postID: id });
      setProvideHelpPost(res[0]);
      setIsLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };

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
        {isLoaded === true && postType === 0 ? (
         needHelpPost != null && <NeedHelpCard key="needHelp" post={needHelpPost} showComments={true} />
        ) : (
            provideHelpPost != null &&
          <GiveHelpCard key="giveHelp" post={provideHelpPost} showComments={true} />
        )}
      </Box>
    </>
  );
};

export default PostDetails;
