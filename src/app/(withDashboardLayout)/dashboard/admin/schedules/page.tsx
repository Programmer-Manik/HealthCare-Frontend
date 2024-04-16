"use client";
import { Box, Button,} from "@mui/material";
import ScheduleModal from "./components/ScheduleModal";
import { useState } from "react";


const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      {/* {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={allSchedule ?? []} columns={columns} />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )} */}
    </Box>
  );
};

export default SchedulesPage;