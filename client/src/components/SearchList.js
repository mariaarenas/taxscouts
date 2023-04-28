import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { fetchData } from "../store/index";

const List = styled.div`
  padding: 100px;
`;

const SearchList = (props) => {
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [search, dispatch]);

  return <List>{search}</List>;
};

export default SearchList;
