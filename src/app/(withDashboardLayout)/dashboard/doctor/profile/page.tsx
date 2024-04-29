"use client";
import {
  useGetMYProfileQuery,
  useUpdateMYProfileMutation,
} from "@/redux/api/myProfile";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import DoctorInformation from "./components/DoctorInformations";
import AutoFileUploader from "@/components/Forms/AutoFileUploader";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading } = useGetMYProfileQuery(undefined);
  const [updateMYProfile, { isLoading: updating }] =
    useUpdateMYProfileMutation();

  const fileUploadHandler = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify({}));

    updateMYProfile(formData);
  };
  if (isLoading) {
    <p>Loading...</p>;
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Box
            sx={{
              height: 300,
              width: "100%",
              overflow: "hidden",
              borderRadius: 1,
            }}
          >
            <Image
              width={300}
              height={400}
              src={data?.profilePhoto}
              alt="profile photo"
            />
          </Box>
          {updating ? (
            <p>Uploading...</p>
          ) : (
            <AutoFileUploader
              name="file"
              label="Choose Your Profile Photo"
              icon={<CloudUploadIcon />}
              onFileUpload={fileUploadHandler}
              variant="text"
            />
          )}
        </Grid>
        <Grid xs={12} md={8}>
          <DoctorInformation data={data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
