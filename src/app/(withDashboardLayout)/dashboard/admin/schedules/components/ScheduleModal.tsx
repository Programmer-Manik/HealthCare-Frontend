import MHDatePicker from "@/components/Forms/MHDatePicker";
import MHForm from "@/components/Forms/MHForm";
import MHTimePicker from "@/components/Forms/MHTimePicker";
import MHModal from "@/components/Shared/MHModal/MHModal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const [createSchedule] = useCreateScheduleMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    // console.log(values);
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);
    // console.log(values);
    try {
      const res = await createSchedule(values).unwrap();
      // console.log(res);
      if (res?.length) {
        toast.success("Schedules created successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <MHModal open={open} setOpen={setOpen} title="Create Schedule">
      <MHForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2} sx={{ width: "400px" }}>
          <Grid item md={12}>
            <MHDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={12}>
            <MHDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid item md={6}>
            <MHTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item md={6}>
            <MHTimePicker name="endTime" label="End Time" />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Create
        </Button>
      </MHForm>
    </MHModal>
  );
};

export default ScheduleModal;