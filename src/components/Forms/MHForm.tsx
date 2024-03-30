import React from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
type tForm = {
   children: React.ReactNode;
   onSubmit:SubmitHandler<FieldValues>
}
const MHForm = ({children, onSubmit}:tForm) => {
  const methods = useForm();
  const {handleSubmit, reset} = methods;
  const submit:SubmitHandler<FieldValues> = (data) => {
   console.log(data)
   onSubmit(data)
   reset()
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default MHForm;
