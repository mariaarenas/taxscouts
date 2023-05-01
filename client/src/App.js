import React from "react";

// components
import Header from "./components/header/Header";
import Home from "./components/home/Home";

// style
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
