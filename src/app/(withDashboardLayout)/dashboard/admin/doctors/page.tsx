"use client"
import { Box, Button, Stack, TextField } from "@mui/material"
import DoctorModal from "./components/DoctorModal"
import { useState } from "react";

const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  return (
    <Box>
      <Stack alignItems="center" direction="row" justifyContent="space-between">
          <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
          <DoctorModal open={isModalOpen} setOpen={setIsModalOpen}/>
          <TextField size="small" placeholder="Search doctors"/>
      </Stack>
    </Box>
  )
}

export default DoctorsPage ;