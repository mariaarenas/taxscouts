import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// style
import styled_comp from "styled-components";
import { styled } from "@mui/material/styles";

// services
import { fetchData } from "../store/index";

// components
import Item from "./Item";

const arr = [1, 2, 3, 4, 5];

const List = styled_comp.div`
  position: absolute;
  width: 434px;
  height: 320px;
  right: 12px;
  top: 80px;
  overflow: scroll;
  border-radius: 1%;
`;

const ListTheme = styled(List)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
}));

const Point = styled_comp.div`
  position: absolute;
  width: 30px;
  height: 30px;
  left: 90%;
  top: 70px;
  transform: rotate(45deg);
`;

const PointTheme = styled(Point)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
}));

const ItemList = (props) => {
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [search, dispatch]);

  return (
    <>
      <PointTheme />
      <ListTheme>
        {arr.map((index) => (
          <Item key={index} />
        ))}
      </ListTheme>
    </>
  );
};

export default ItemList;
