import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

export default function Header() {
  return (
    <StyledHeader>
      <h2>weSPAWN</h2>
      <h1>Profile</h1>
      <div>Placeholder</div>
      <Burger />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: solid black 1px;

  h1,
  h2 {
    margin: 0px;
  }
`;
