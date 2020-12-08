import React from "react";
import styled from "styled-components";

export default function UserImg(props) {
  return (
    <Avatar gridColumn={props.gridColumn} gridRow={props.gridRow}>
      <img
        src="https://schmusa.de/wp-content/uploads/2020/06/Bud-Spencer2.jpg"
        alt="userphoto"
      />
      <div />
    </Avatar>
  );
}

const Avatar = styled.div`
  position: relative;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};

  img {
    object-fit: cover;
    height: 140px;
    width: 140px;
    border-radius: 70px;
    border: 0.5px solid black;
  }

  div {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 0.5px solid black;
    //background will fit to status color
    background-color: green;
    box-shadow: inset 0 0 4px black;
  }
`;
