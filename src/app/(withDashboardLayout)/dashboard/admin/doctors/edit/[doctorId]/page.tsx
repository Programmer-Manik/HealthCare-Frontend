"use client"
type TParams = {
   params:{
      doctorId : string;
   }
}
const DoctorUpdatePage = ({params}:TParams) => {
//   console.log(params?.doctorId)
   return (
    <div>
      <h2>Welcome to the doctorUpdatePage page</h2>
    </div>
  );
};

export default DoctorUpdatePage;
