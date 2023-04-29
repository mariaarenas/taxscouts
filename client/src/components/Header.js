import React from "react";

import { useDispatch } from "react-redux";
import { searchActions } from "../store/index";

import styled from "styled-components";

const Nav = styled.div`
  position: absolute;
  width: 1440px; /*100%*/
  height: 60px;
  left: 0px;
  top: 0px;
  background: #f2f2f2;
`;

const Search = styled.input`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

  position: absolute;
  width: 238px;
  height: 42px;
  right: 12px;
  top: 9px;
  background: #e3e3e3;
  border-radius: 2px;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  padding-left: 10px;
`;

const Header = (props) => {
  const dispatch = useDispatch();

  const searchHandler = (value) => {
    dispatch(searchActions.search(value));
  };
  return (
    <Nav>
      <Search type="text" onChange={(e) => searchHandler(e.target.value)} />
    </Nav>
  );
};

export default Header;
