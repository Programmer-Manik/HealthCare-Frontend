import { Box, Container, Typography } from "@mui/material";
import { start } from "repl";

const Specialist = async() => {
 const res = await fetch('http://localhost:5000/api/v1/specialties',{
   next:{
      revalidate:30,
   }
 });
 const specialties = await res.json()
//  console.log(specialties)
   return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
          textAlign: "center",
        }}
      >
        <Box sx={{
         textAlign:"start",
        }}>
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments Across Specialties
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Experienced Doctors Across All Specialties
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialist;
