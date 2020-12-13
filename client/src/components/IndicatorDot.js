import React from "react";
import styled from "styled-components";

export default function IndicatorDot(props) {
  return (
    <Indicator
      position={props.position}
      top={props.top}
      left={props.left}
      color={props.color}
      isActive={props.isActive}
    />
  );
}

const Indicator = styled.div`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 0.5px solid black;
  //background will fit to status color
  background-color: ${(props) => (props.isActive ? `${props.color}` : "white")};
  box-shadow: inset 0 0 4px black;
`;
