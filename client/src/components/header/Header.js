import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// components
import SearchEngine from "../search/SearchEngine";

// MUI
import GTranslateIcon from "@mui/icons-material/GTranslate";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

// resources
import { languages } from "../../translation/i18n";

const Header = () => {
  const [t, i18n] = useTranslation();

  const [anchorElLang, setAnchorElLang] = useState(null);

  const handleClose = () => {
    setAnchorElLang(null);
  };

  // update language based on user selection
  const handleChangeLanguage = (value) => {
    i18n.changeLanguage(value);
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            id="language"
            size="large"
            onClick={(e) => setAnchorElLang(e.currentTarget)}
          >
            <GTranslateIcon style={{ color: "whitesmoke" }} />
          </IconButton>
          <Menu
            anchorEl={anchorElLang}
            open={Boolean(anchorElLang)}
            onClose={handleClose}
          >
            {languages.map((item) => (
              <MenuItem
                key={item.value}
                value={item.value}
                onClick={() => handleChangeLanguage(item.value)}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
          <Typography variant="h6">Taxscouts</Typography>
          <SearchEngine />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
