import React from "react";
import styled from "styled-components";

export default function TextBox(props) {
  return (
    <StyledBox
      bordercolor={props.bordercolor}
      color={props.color}
      isActive={props.isActive}
    >
      {props.text}
    </StyledBox>
  );
}

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 10px 25px;
  font-size: 20px;
  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.bordercolor};
  border-radius: 25px;
`;
