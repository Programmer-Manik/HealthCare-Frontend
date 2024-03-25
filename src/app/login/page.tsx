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
const LoginPage = () => {
  return (
    <Container
    >
      <Stack
        sx={{
          height:'100vh',
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
                Login Healthcare
              </Typography>
            </Box>
          </Stack>
          <Box sx={{
            margin:'10px 0'
          }}>
            <form>
              <Grid container spacing={3}>
              <Grid item md={6}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Typography mb={1} pt={1} textAlign="end" component="p" fontWeight={600}>
                Forgot password?
              </Typography>
              <Button
                sx={{
                  margin: "15px 0",
                }}
                fullWidth={true}
              >
                Login
              </Button>
              <Typography component="p" fontWeight={600}>
                Don&apos;t have an account <Link href="/register">Create an Account</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
