import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";

// style
import styled_comp from "styled-components";
import { styled } from "@mui/material/styles";

import ItemList from "../item/ItemList";

// styled-components
const Search = styled_comp.input`
  position: absolute;
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

const SearchEngine = (props) => {
  const dispatch = useDispatch();

  // update input value for searchings
  const searchHandler = (value) => {
    dispatch(searchActions.search(value));
  };

  return (
    <>
      <SearchTheme
        type="text"
        onChange={(e) => searchHandler(e.target.value)}
      />
      <ItemList />
    </>
  );
};

export default SearchEngine;
