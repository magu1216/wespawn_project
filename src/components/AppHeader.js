import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

export default function AppHeader() {
  return (
    <Header>
      <h2>weSPAWN</h2>
      <h1>Profile</h1>
      <Navigation />
    </Header>
  );
}

const Header = styled.header`
  background-color: #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: solid black 1px;
  position: relative;

  h1,
  h2 {
    margin: 0px;
  }
`;
