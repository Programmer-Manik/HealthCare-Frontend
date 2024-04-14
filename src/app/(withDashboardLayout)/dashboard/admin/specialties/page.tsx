"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SpecialtyModal from "./components/SpecialistModal";
import { useGetAllSpecialtyQuery } from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from '@mui/icons-material/Delete';

const SpecialtiesPage = () => {
  const [isModalOpen, setISModalOpen] = useState(false);
  const { data, isLoading } = useGetAllSpecialtyQuery({});


  const handelDelete = (id:string) => {
    console.log(id)
  }

  // console.log(data)
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 300 },
    {
      field: "icon",
      headerName: "Icon",
      width: 300,
      renderCell: ({ row }) => {
        return <Box>
          <Image src={row.icon} width={20} height={20} alt="Icon"/>
        </Box>
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 400,
      renderCell: ({ row }) => {
        return <IconButton onClick={()=>handelDelete(row.id)} aria-label="delete">
        <DeleteIcon />
      </IconButton>
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
        <Box my={2}>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <h1>Loading</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
