import MHModal from "@/components/Shared/MHModal/MHModal";
import { Box, Button, Stack, TextField } from "@mui/material";

const SpecialtiesPage = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button>
          Create Specialty 
        </Button>
        <MHModal/>
        <TextField size="small" placeholder="Search Specialties"/> 
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
