import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

export default function AppHeader() {
  return (
    <Header>
      <h1>
        <span style={{ color: "yellow" }}>we</span>SPAWN
      </h1>
      <Navigation />
    </Header>
  );
}

const Header = styled.header`
  z-index: 0;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100vw;
  position: fixed;

  h1 {
    margin-left: 15px;
    font-family: "Press Start 2P", cursive;
  }
`;
