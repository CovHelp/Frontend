// import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Box, Grid } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import AddOrganizationCard from "../../components/Cards/OrganizationCard/AddOrganizationCard";
import OrganizationCard from "../../components/Cards/OrganizationCard/OrganizationCard";
import "./organization.css"
import { fetchOrganizationPosts } from '../../api/post'
const Organization = () => {

  const [posts, setPosts] = useState([]);



  useEffect(() => {
    const fetch = async () => {
      const res = await fetchOrganizationPosts();
      setPosts(res)
    }
    fetch();
  }, [])

  return (
    <>
      {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}}> <h1 style={{fontSize: 50}}>Coming soon!</h1> </div> */}

      <Box
        w="100%"
         px={3}
      pt={3}
        alignItems={"center"}
        background="#f0f2f5"
      >
        <div
          className="grid"
          // display="grid"
          // justifyContent="center"
          // alignItems="center"
          // rowGap={1}
          // w="100%"
          // h="100%"
          // columnGap={[0, 3]}
          // templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
          // background="#f0f2f5"
        >
          <AddOrganizationCard />
          {posts.length > 0 && posts.map((post) =>
            <OrganizationCard
              name={post.name}
              picture={post.image}
              key={post.id}
              website={post.website}
              category={post.category}
              contact={post.contact}
              address={post.address}
              locations={post.locations}
              donation={post.donation}
            />
          )}
        </div>
      </Box>
    </>
  );
};

export default Organization;
