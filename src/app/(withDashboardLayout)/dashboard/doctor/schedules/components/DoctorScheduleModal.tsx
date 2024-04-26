import MHModal from "@/components/Shared/MHModal/MHModal";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

type TProps = {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {

   const [selectedDate, setSelectedDate] = useState(
      dayjs(new Date()).toISOString()
   );

  return (
   <MHModal open={open} setOpen={setOpen} title='Create Doctor Schedule'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <DatePicker
             label='Controlled picker'
             value={dayjs(selectedDate)}
             onChange={(newValue) =>
                setSelectedDate(dayjs(newValue).toISOString())
             }
             sx={{ width: '100%' }}
         />
      </LocalizationProvider>
      
</MHModal>
  );
};

export default DoctorScheduleModal;
