import MHModal from "@/components/Shared/MHModal/MHModal";
import { TextField } from "@mui/material";
import React from "react";
type TProps = {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
 };
const SpecialistModal = ({open, setOpen}:TProps) => {
  return (
   <MHModal open={open} setOpen={setOpen} title="Create Specialist">
   <TextField/>
  </MHModal>
  )
};

export default SpecialistModal;
