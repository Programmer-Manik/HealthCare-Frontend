"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { FieldValue, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { toast } from "sonner";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import MHForm from "@/components/Forms/MHForm";
import MHInput from "@/components/Forms/MHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const ValidationSchema  = z.object({
  email: z.string().email('Please enter valid a email address!'),
  password:z.string().min(6,'Must be at least 6 characters')
})

const LoginPage = () => {
  const router = useRouter();
 
  const handleLogin = async (values:FieldValues) => {
    // console.log(values);
    try {
      const res = await userLogin(values);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login PH HealthCare
              </Typography>
            </Box>
          </Stack>
          <Box>
            <MHForm 
            onSubmit={handleLogin}
            resolver={zodResolver(ValidationSchema)}
            defaultValues={{
              email:'',
              password:'',
            }}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <MHInput
                  name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <MHInput
                   name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                 
                  />
                </Grid>
              </Grid>

              <Typography mb={1} textAlign="end" component="p" fontWeight={300}>
                Forgot Password?
              </Typography>

              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <Link href="/register">Create an account</Link>
              </Typography>
            </MHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
