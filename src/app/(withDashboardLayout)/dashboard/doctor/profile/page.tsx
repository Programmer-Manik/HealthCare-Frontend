"use client";
import { useGetMYProfileQuery } from "@/redux/api/myProfile";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Profile = () => {
  const { data, isLoading } = useGetMYProfileQuery(undefined);
  // console.log(data)
  if (isLoading) {
    <p>Loading...</p>;
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={4}></Grid>
        <Grid xs={8}></Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
