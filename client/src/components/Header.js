import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../store/search-slice";
import { useTranslation } from "react-i18next";

// MUI
import GTranslateIcon from "@mui/icons-material/GTranslate";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

// style
import styled_comp from "styled-components";
import { styled } from "@mui/material/styles";

// resources
import { languages } from "../translation/i18n";

const Search = styled_comp.input`
  position: fixed;
  width: 238px;
  height: 42px;
  right: 12px;
  background: #e3e3e3;
  border-radius: 2px;
  padding-left: 10px;
`;

const SearchTheme = styled(Search)(({ theme }) => ({
  ...theme.typography.h4,
}));

const Header = (props) => {
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation();

  const [anchorElLang, setAnchorElLang] = useState(null);

  const handleClose = () => {
    setAnchorElLang(null);
  };

  const handleChangeLanguage = (value) => {
    i18n.changeLanguage(value);
    handleClose();
  };

  const searchHandler = (value) => {
    dispatch(searchActions.search(value));
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

          <SearchTheme
            type="text"
            onChange={(e) => searchHandler(e.target.value)}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
