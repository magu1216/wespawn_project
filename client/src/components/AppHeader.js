import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

export default function AppHeader() {
  return (
    <Header>
      <h2>vSPAWN</h2>
      <h1>Profile</h1>
      <Navigation />
    </Header>
  );
}

const Header = styled.header`
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  box-shadow: inset 0 -4px 4px -4px black;
  position: relative;

  h1,
  h2 {
    margin: 0px;
  }
`;
