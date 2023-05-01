import React from "react";

// style
import styled from "styled-components";

// MUI
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

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

const ItemDetails = (props) => {
  return (
    <ItemDetail>
      <DivContainer>
        <Typography variant="h5" component="div">
          {props.item.title}
        </Typography>
        {props.item.author_name && props.item.author_name.length !== 0 && (
          <Typography variant="subtitle2" color="text.secondary">
            {props.item.author_name[0]}
          </Typography>
        )}
        {props.item.id_amazon &&
          props.item.id_amazon.length !== 0 &&
          props.item.id_amazon.map((link) => (
            <Typography variant="body2" key={link}>
              <Link href={`https://www.amazon.co.uk/dp/${link}`}>{link}</Link>
            </Typography>
          ))}
      </DivContainer>
      <Img />
    </ItemDetail>
  );
};

export default ItemDetails;
