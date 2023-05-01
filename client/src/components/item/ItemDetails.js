import React from "react";

// style
import styled_comp from "styled-components";
import { styled } from "@mui/material/styles";

// MUI
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// styled-components
const ItemDetail = styled_comp.div`
  left: 1004px;
  top: 79px;
  margin: 10px;
`;

const Img = styled_comp.div`
  width: 72px;
  height: 72px;
  background: #ffffff;
`;

const DivContainer = styled_comp.div`
  float: right;
  width: 316px;
`;

const ButtonTheme = styled(Button)(({ theme }) => ({
  fontSize: "5px",
  width: "10px",
  height: "10px",
  backgroundColor: theme.palette.primary.light,
}));

const ItemDetails = (props) => {
  return (
    <ItemDetail>
      <DivContainer>
        <Typography variant="h5" component="div" noWrap>
          {props.item.title}
        </Typography>
        {props.item.author && props.item.author.length !== 0 && (
          <Typography variant="subtitle2" color="text.secondary" noWrap>
            {props.item.author.join(", ")}
          </Typography>
        )}
        {props.item.amazonList && props.item.amazonList.length !== 0 && (
          <div
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "flex",
              whiteSpace: "nowrap",
            }}
          >
            {props.item.amazonList.map((link) => (
              <>
                {link !== "" && (
                  <ButtonTheme
                    variant="contained"
                    href={`https://www.amazon.co.uk/dp/${link}`}
                  >
                    {link}
                  </ButtonTheme>
                )}
                &nbsp;
              </>
            ))}
          </div>
        )}
      </DivContainer>
      <Img>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={props.item.cover}
          alt="cover"
        />
      </Img>
    </ItemDetail>
  );
};

export default ItemDetails;
