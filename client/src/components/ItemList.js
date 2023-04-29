import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { fetchData } from "../store/index";
import Item from "./Item";

const arr = [1, 2, 3, 4, 5];

const List = styled.div`
  position: absolute;
  width: 434px;
  height: 320px;
  left: 994px;
  top: 69px;
  overflow: scroll;

  background: #e3e3e3;
`;

const Point = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  left: 1309px;
  top: 60px;

  background: #e3e3e3;
  transform: rotate(45deg);
`;

const ItemList = (props) => {
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [search, dispatch]);

  return (
    <>
      <Point />
      <List>
        {arr.map(() => (
          <Item />
        ))}
      </List>
    </>
  );
};

export default ItemList;
