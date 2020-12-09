import React from "react";
import styled from "styled-components";
import StatusList from "../services/StatusList";

export default function QuickMenu(props) {
  if (props.direction === "upload") {
    return (
      <QuickBox>
        <IndicatorBox color={props.color} />
        <h3>Select Source</h3>
        <div>Gallery</div>
        <div>Camera</div>
      </QuickBox>
    );
  } else if (props.direction === "lfg") {
    return (
      <QuickBox>
        <IndicatorBox color={props.color} />
        <h3>Set Status</h3>
        <StatusList />
      </QuickBox>
    );
  } else {
    return (
      <QuickBox>
        <IndicatorBox color={props.color} />
        <h3>Friends</h3>
        <div>Friend 1</div>
        <div>Friend 2</div>
      </QuickBox>
    );
  }
}

const QuickBox = styled.div`
  z-index: -1;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  width: 100%;
  position: absolute;
  bottom: 35px;
  border-radius: 35px 35px 0 0;
`;

const IndicatorBox = styled.div`
  background-color: ${(props) => props.color};
  width: 40vw;
  height: 10px;
  margin-bottom: 20px;
`;
