import { createTheme } from "@mui/material/styles";

import { color } from "./color";

export const theme = createTheme({
  palette: {
    primary: {
      main: color.black,
    },
    secondary: {
      main: color.golden,
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
  },
});
