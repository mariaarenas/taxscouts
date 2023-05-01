import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// style
import styled_comp from "styled-components";
import { styled } from "@mui/material/styles";

// services
import { fetchData } from "../store/search-actions";

// components
import Item from "./Item";

// resources
import { device } from "../resources/config";
import i18n from "../translation/i18n";

const List = styled_comp.div`
  position: absolute;
  width: 434px;
  max-height: 320px;
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
  left: 70%;
  @media ${device.mobile} { 
    left: 85%;
  }
  @media ${device.desktop} { 
    left: 95%;
  }
  
  top: 70px;
  transform: rotate(45deg);
`;

const PointTheme = styled(Point)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
}));

const ItemList = (props) => {
  const search = useSelector((state) => state.search.search);
  const items = useSelector((state) => state.items.items);

  const dispatch = useDispatch();

  useEffect(() => {
    if (search !== "") {
      dispatch(fetchData(search, i18n.language));
    }
  }, [search, dispatch]);

  return (
    <>
      {search !== "" && items.length !== 0 && (
        <>
          <PointTheme />
          <ListTheme>
            {items.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </ListTheme>
        </>
      )}
    </>
  );
};

export default ItemList;
