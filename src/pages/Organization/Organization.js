// import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Box, Grid } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchOrganizationPosts } from "../../api/post";
import AddOrganizationCard from "../../components/Cards/OrganizationCard/AddOrganizationCard";
import OrganizationCard from "../../components/Cards/OrganizationCard/OrganizationCard";

const Organization = () => {

  const [posts, setPosts] = useState([]);

  const loadOrganizationPosts = async () => {

    try {
      const res = await fetchOrganizationPosts();
      setPosts(res);
    } catch (error) {}
  }


  useEffect(() => {
    loadOrganizationPosts();
  }, [])

  return (
    <>
      {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}}> <h1 style={{fontSize: 50}}>Coming soon!</h1> </div> */}

      <Box pt={3} p={["4", "8"]} background="#f0f2f5">
        <Grid
          justifyContent="center"
          alignItems="center"
          rowGap={3}
          w="100%"
          h="100%"
          columnGap={[0, 3]}
          templateColumns="repeat(auto-fill,minmax(auto,350px))"
          background="#f0f2f5"
        >
          <AddOrganizationCard />
          {posts.length > 0 && posts.map((post, index) =>
            <OrganizationCard name={post.name} picture={post.image} />
          )}
        </Grid>
      </Box>
    </>
  );
};

export default Organization;
