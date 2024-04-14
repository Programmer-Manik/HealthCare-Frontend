"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SpecialtyModal from "./components/SpecialistModal";
import { useGetAllSpecialtyQuery } from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const SpecialtiesPage = () => {
  const [isModalOpen, setISModalOpen] = useState(false);
  const { data, isLoading } = useGetAllSpecialtyQuery({});
  // console.log(data)
  const columns: GridColDef[] = [{ field: "title", headerName: "Title", width: 70 }];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setISModalOpen(true)}>Create Specialty</Button>
        <SpecialtyModal open={isModalOpen} setOpen={setISModalOpen} />
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>
      <Box>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
