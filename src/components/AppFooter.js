import React from "react";
import styled from "styled-components";
import QuickButton from "./QuickButton";

export default function AppFooter() {
  return (
    <Footer>
      <QuickButton direction={"upload"} />
      <QuickButton direction={"lfg"} />
      <QuickButton direction={"friends"} />
    </Footer>
  );
}

const Footer = styled.footer`
  background-color: #e5e5e5;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
  width: 100vw;
  border-top: solid black 1px;
  position: absolute;
  bottom: 0;

  h1,
  h2 {
    margin: 0px;
  }
`;
