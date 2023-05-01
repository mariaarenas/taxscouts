import { createTheme } from "@mui/material/styles";

import { color } from "./color";

export const theme = createTheme({
  palette: {
    primary: {
      main: color.black,
    },
    secondary: {
      main: color.burlywood,
    },
    error: {
      main: color.error,
    },
  },
  typography: {
    h6: {
      color: color.smoke,
      fontSize: "28px",
    },
    h4: {
      color: color.gray,
      fontSize: "20px",
    },
    h5: {
      color: color.golden,
      fontSize: "18px",
    },
  },
});
