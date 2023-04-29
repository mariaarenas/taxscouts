import React from "react";

// style
import styled from "styled-components";

// MUI
import Typography from "@mui/material/Typography";

const ItemDetail = styled.div`
  left: 1004px;
  top: 79px;
  margin: 10px;
`;

const Img = styled.div`
  width: 72px;
  height: 72px;
  background: #ffffff;
`;

const DivContainer = styled.div`
  float: right;
  width: 316px;
`;

const Item = (props) => {
  return (
    <ItemDetail>
      <DivContainer>
        <Typography variant="h5" component="div">
          title
        </Typography>
        <Typography color="text.secondary">description</Typography>
        <Typography variant="body2">description</Typography>
      </DivContainer>
      <Img />
    </ItemDetail>
  );
};

export default Item;
