import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// style
import styled_comp from "styled-components";
import { styled } from "@mui/material/styles";

// services
import { fetchData } from "../../store/search-actions";

// components
import ItemDetails from "./ItemDetails";

// resources
import { config } from "../../resources/config";

// styled-components
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
  @media ${config.device.mobile} { 
    left: 85%;
  }
  @media ${config.device.desktop} { 
    left: 95%;
  }
  
  top: 70px;
  transform: rotate(45deg);
`;

const PointTheme = styled(Point)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
}));

const ItemList = () => {
  const search = useSelector((state) => state.search.search);
  const items = useSelector((state) => state.items.items);

  const dispatch = useDispatch();

  useEffect(() => {
    // fetch data every time input change only if it is not empty string
    if (search !== "") {
      dispatch(fetchData(search));
    }
  }, [search, dispatch]);

  return (
    <>
      {search !== "" && items.length !== 0 && (
        <>
          <PointTheme />
          <ListTheme>
            {items.map((item, index) => (
              <ItemDetails key={index} item={JSON.parse(item)} />
            ))}
          </ListTheme>
        </>
      )}
    </>
  );
};

export default ItemList;
