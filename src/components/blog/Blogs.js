import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { Grid } from "@mui/material";
import CardEl from "../shared/CardEl";

function Blogs() {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);
  console.log({ loading, data, errors });
  if (loading) return <h4>loading ...</h4>;
  if (errors) return <h4>error occured ..</h4>;
  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEl {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
