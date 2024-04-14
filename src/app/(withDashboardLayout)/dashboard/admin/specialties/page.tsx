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
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 100 },
    {
      field: "icon",
      headerName: "Icon",
      width: 100,
      renderCell: ({ row }) => {
        return console.log(row)
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setISModalOpen(true)}>Create Specialty</Button>
        <SpecialtyModal open={isModalOpen} setOpen={setISModalOpen} />
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>
      {!isLoading ? (
        <Box>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <h1>Loading</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
