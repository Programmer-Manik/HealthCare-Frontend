"use client"
import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const route = useRouter();
  if(!isLoggedIn()){
    return route.push("/login")
  }
  return <DashboardDrawer>{children} </DashboardDrawer>;
};

export default DashboardLayout;