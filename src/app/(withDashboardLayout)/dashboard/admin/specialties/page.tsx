"use client"
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SpecialtyModal from "./components/SpecialistModal";
import { useGetAllSpecialtyQuery } from "@/redux/api/specialtiesApi";

const SpecialtiesPage = () => {
  const [isModalOpen, setISModalOpen] = useState(false);
  const {data , isLoading }= useGetAllSpecialtyQuery({});
  // console.log(data)
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setISModalOpen(true)}>Create Specialty</Button>
        <SpecialtyModal open={isModalOpen} setOpen={setISModalOpen}/>
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>
      <Box>
        <h1>Display Specialty</h1>
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
