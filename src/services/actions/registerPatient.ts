"use server"
const RegisterPatient = async(formData:FormData) => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/create-patient`,{
      method:'POST',
      body:formData,
      cache:'no-store'
   })
  return 
};

export default RegisterPatient;
