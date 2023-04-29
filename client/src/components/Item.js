import React from "react";
import styled from "styled-components";

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

const Title = styled.div`
  float: right;
  background: #c4c4c4;
  height: 18px;
  width: 316px;
  margin-bottom: 17px;
`;

const DivContainer = styled.div`
  float: right;
  background: #e3e3e3;
  width: 316px;
  margin-bottom: 5px;
  font-size: 12px;
`;

const Text1 = styled.div`
  float: left;
  background: #c4c4c4;
  height: 9px;
  width: 163px;
`;

const Item = (props) => {
  return (
    <ItemDetail>
      <Title>aaaaaaa</Title>
      <DivContainer>
        <Text1>bbbbbbbb</Text1>
      </DivContainer>
      <DivContainer>
        <Text1>cccccc </Text1>
      </DivContainer>
      <DivContainer>
        <Text1 style={{ width: "111px" }}>ddd dd</Text1>
      </DivContainer>
      <Img />
    </ItemDetail>
  );
};

export default Item;
