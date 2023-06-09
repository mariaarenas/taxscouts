import React from "react";
import { useTranslation } from "react-i18next";

// MUI
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const Home = () => {
  const [t] = useTranslation();

  return (
    <Box sx={{ padding: "50px" }}>
      <Typography variant="h3"> {t("home.title")}</Typography>
      <Typography variant="h6" sx={{ color: "grey" }}>
        {t("home.description")}
      </Typography>
    </Box>
  );
};

export default Home;
