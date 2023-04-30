import React from "react";

// components
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Home from "./components/Home";

// style
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ItemList />
      <Home />
    </ThemeProvider>
  );
}

export default App;
