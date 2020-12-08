import React from "react";
import styled from "styled-components";

export default function TextBox(props) {
  return <StyledBox color={props.color}>{props.text}</StyledBox>;
}

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 5px;
  font-size: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  box-shadow: inset 0 0 4px black;
`;
