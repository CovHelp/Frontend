// import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Box, Grid } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import AddOrganizationCard from "../../components/Cards/OrganizationCard/AddOrganizationCard";
import OrganizationCard from "../../components/Cards/OrganizationCard/OrganizationCard";
import { fetchOrganizationPosts } from '../../api/post'
const Organization = () => {

  const [posts, setPosts] = useState([]);

  //   try {
  //     const res = await axios.get("https://9aa951456745.ngrok.io/v1/org")
  //     console.log("chal jaa ", res.data);
  //     return res.data
  //   } catch (e) { return "NOPE"}
  //   // throw new CovhelpException(e.response.data, e.response.status);
  //   // try {
  //   //   const res = await fetchOrganizationPosts();
  //   //   setPosts(res);
  //   // } catch (error) {}
  // }



  useEffect(() => {
    const fetch = async () => {
      const res = await fetchOrganizationPosts();
      console.log("PLEEEE", res)
      setPosts(res)
    }
    fetch();
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
          {posts.length > 0 && posts.map((post) =>
            <OrganizationCard name={post.name} picture={post.image} key=
              {post.id} website={post.website} category={post.category} contact={post.contact} address={post.address}/>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default Organization;
