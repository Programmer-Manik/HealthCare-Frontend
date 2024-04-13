import MHFileUploader from "@/components/Forms/MHFileUploader";
import MHForm from "@/components/Forms/MHForm";
import MHInput from "@/components/Forms/MHInput";
import MHModal from "@/components/Shared/MHModal/MHModal";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const handelFormSubmit = (values: FieldValues) => {
    const data = modifyPayload(values)
    try{
      
    }catch(error){
      console.log(error)
    }
  };
  return (
    <MHModal open={open} setOpen={setOpen} title="Create A New Specialty">
      <MHForm onSubmit={handelFormSubmit}>
        <Grid container spacing={2}>
          <Grid md={6} item>
            <MHInput name="title" label="Title"/>
          </Grid>
          <Grid md={6} item>
            <MHFileUploader name="file" label="Upload file "/>
          </Grid>
        </Grid>
        <Button sx={{mt:1}} type="submit">
          Create
        </Button>
      </MHForm>
    </MHModal>
  );
};

export default SpecialtyModal;
