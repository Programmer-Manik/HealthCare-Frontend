
import { Box, Container } from '@mui/material';
import React from 'react';


const Doctors = async () => {
   const res = await fetch('http://localhost:5000/api/v1/doctor');
   const { data } = await res.json();

   // console.log(data);

   return (
      <Container>

         <Box sx={{
            my:4,
            borderColor:'secondary.light',
            borderBottom:'2px dashed'
         }}/>
         <Box sx={{ mt: 2, p: 3, bgcolor: 'secondary.light' }}></Box>
      </Container>
   );
};

export default Doctors;