import React from "react";
import styled from "styled-components";

export default function AppFooter() {
  return (
    <Footer>
      <button>UPLOAD</button>
      <div>STATUS</div>
      <div>FRIENDS</div>
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
