"use client";

import useUserInfo from "@/hooks/useUserInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  // const { userId } = getUserInfo() as any;
  const userInfo = useUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
     logoutUser(router);
  };

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          M
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography>Health Plans</Typography>
          <Typography>Medicine</Typography>
          <Typography>Diagnostics</Typography>
          <Typography>NGOs</Typography>
          {userInfo.userId ? (
            <Typography component={Link} href="/dashboard">
              Dashboard
            </Typography>
          ):null}
        </Stack>

        {userInfo?.userId ? (
            <Button color='error' onClick={handleLogOut}>
               Logout
            </Button>
         ) : (
            <Button component={Link} href='/login'>
               Login
            </Button>
         )}
      </Stack>
    </Container>
  );
};

export default Navbar;
