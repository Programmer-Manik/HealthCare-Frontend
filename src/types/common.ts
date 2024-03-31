import { USER_ROLE } from "@/contants/role";
import { number } from "zod";

export type IMeta = {
   page:number;
   limit:number;
   total:number;
}

export type  UserRole = keyof typeof USER_ROLE;