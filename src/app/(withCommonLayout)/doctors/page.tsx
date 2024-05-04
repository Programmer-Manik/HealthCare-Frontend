
import { Box, Container } from '@mui/material';
import { Doctor } from '@/types/doctor';
import React from 'react';
import DashedLine from '@/components/UI/Doctor/Dashedline';


const Doctors = async () => {
   const res = await fetch('http://localhost:5000/api/v1/doctor');
   const { data } = await res.json();

   // console.log(data);

   return (
      <Container>
 <Container>
         <DashedLine />


         <Box sx={{ mt: 2, p: 3, bgcolor: 'secondary.light' }}>
            {data?.map((doctor: Doctor, index: number) => (
               <Box key={doctor.id}>
                  <DoctorCard doctor={doctor} />

                  {index === data.length - 1 ? null : <DashedLine />}
               </Box>
            ))}
         </Box>
      </Container>
      </Container>
   );
};

export default Doctors;