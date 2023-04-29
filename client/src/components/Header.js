import React from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../store/index";

// MUI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// style
import styled_comp from "styled-components";
import { styled } from "@mui/material/styles";

const Nav = styled_comp.div`
  position: absolute;
  width: 100%; /*100%*/
  height: 60px;
  left: 0px;
  top: 0px;
`;

const Search = styled_comp.input`
  position: absolute;
  width: 238px;
  height: 42px;
  right: 12px;
  top: 9px;
  background: #e3e3e3;
  border-radius: 2px;
  padding-left: 10px;
`;

const SearchTheme = styled(Search)(({ theme }) => ({
  ...theme.typography.h4,
}));

const Header = (props) => {
  const dispatch = useDispatch();

  const searchHandler = (value) => {
    dispatch(searchActions.search(value));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Taxscouts
          </Typography>
          <Nav>
            <SearchTheme
              type="text"
              onChange={(e) => searchHandler(e.target.value)}
            />
          </Nav>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
