"use client"
import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialistModal from "./components/SpecialistModal";
import { useState } from "react";
const SpecialtiesPage = () => {
  const [isModalOpen, setISModalOpen] = useState(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setISModalOpen(true)}>Create Specialty</Button>
        <SpecialistModal open={isModalOpen} setOpen={setISModalOpen}/>
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
