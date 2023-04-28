import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

const List = styled.div`
  padding: 100px;
`;

const SearchList = (props) => {
  const search = useSelector((state) => state.search.search);
  return <List>{search}</List>;
};

export default SearchList;
