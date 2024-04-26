"use client"
import { Box, Button } from "@mui/material";
import { useState } from "react";
import DoctorScheduleModal from "./components/DoctorScheduleModal";

const DoctorSchedulesPage = () => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
   <Box>
   <Button onClick={() => setIsModalOpen(true)}>
      Create Doctor Schedule
   </Button>
   <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
   {/* <Box sx={{ mb: 5 }}></Box> */}

   {/* <Box>
      {!isLoading ? (
         <Box my={2}>
            <DataGrid rows={allSchedule ?? []} columns={columns} />
         </Box>
      ) : (
         <h1>Loading.....</h1>
      )}
   </Box> */}
</Box>
  );
};

export default DoctorSchedulesPage;
