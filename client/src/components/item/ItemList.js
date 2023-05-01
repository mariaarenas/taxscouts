import React from "react";
import { useSelector } from "react-redux";

// style
import styled_comp from "styled-components";
import { styled } from "@mui/material/styles";

// services
import { useGetBookByTitleAndLanguageQuery } from "../../services/book-search";

// components
import ItemDetails from "./ItemDetails";

// resources
import { config } from "../../resources/config";
import i18n from "../../translation/i18n";

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

  const {
    data = [],
    isError,
    isFetching,
    isLoading,
  } = useGetBookByTitleAndLanguageQuery({
    search: search,
    language: i18n.language,
  });

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return;

  return (
    <>
      <div className={isFetching ? "posts--disabled" : ""}>
        {data.docs.length !== 0 && (
          <>
            <PointTheme />
            <ListTheme>
              {data.docs.map((doc) => (
                <ItemDetails key={doc.key} item={doc} />
              ))}
            </ListTheme>
          </>
        )}
      </div>
    </>
  );
};

export default ItemList;
