import { createTheme } from "@mui/material/styles";
// import { green, purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1586FD",
    },
    secondary: {
      main: "#666f73",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides:{
        root:{
          padding:'8px 24px'
        }
      }
    },
    MuiContainer:{
      defaultProps:{
         maxWidth:"lg"
      }
    }
  },
  
});
