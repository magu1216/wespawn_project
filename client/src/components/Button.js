import React from "react";
import styled from "styled-components";

export default function Button(props) {
  return (
    <SquareButton color={props.color} onClick={props.onClick}>
      {props.text}
    </SquareButton>
  );
}

const SquareButton = styled.button`
  width: 100px;
  height: 50px;
  margin: 5px;
  border-radius: 5px;
`;
