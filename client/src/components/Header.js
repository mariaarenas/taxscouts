import React from "react";

import styled from "styled-components";

const Nav = styled.div`
  position: absolute;
  width: 100%; /*1440px*/
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
  return (
    <Nav>
      <Search type="text" />
    </Nav>
  );
};

export default Header;
