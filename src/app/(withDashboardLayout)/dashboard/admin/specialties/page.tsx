"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import SpecialtyModal from "./components/SpecialistModal";
import {
  useDeleteOneSpecialtyMutation,
  useGetAllSpecialtyQuery,
} from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

const SpecialtiesPage = () => {
  const [isModalOpen, setISModalOpen] = useState(false);
  const { data, isLoading } = useGetAllSpecialtyQuery({});
  const [deleteOneSpecialty] = useDeleteOneSpecialtyMutation();

  const handelDelete = async (id: string) => {
    try {
      const res = await deleteOneSpecialty(id).unwrap();
      // console.log(res)
      if (res?.id) {
        toast.success("specialty Delete successfully");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  // console.log(data)
  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.icon} width={30} height={30} alt="Icon" />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handelDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
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
