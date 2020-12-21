import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

export default function AppHeader() {
  return (
    <Header>
      <h2>vS</h2>
      <h1>Profile</h1>
      <Navigation />
    </Header>
  );
}

const Header = styled.header`
  z-index: 1;
  background-color: var(--primary-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100vw;
  box-shadow: inset 0 -4px 4px -4px black;
  position: fixed;

  h1,
  h2 {
    margin: 0px;
  }
`;
