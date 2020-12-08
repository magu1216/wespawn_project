import React from "react";
import styled from "styled-components";
import TextBox from "./TextBox";
import UserImg from "./UserImg";

export default function ProfileHead() {
  return (
    <Head>
      <UserImg gridRow="1 / 3" gridColumn="1 / 2" />
      <TextBox color="var(--primary-gray)" text="Username" />
      <TextBox color="green" text="XBox" />
    </Head>
  );
}

const Head = styled.section`
  display: grid;
  padding: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
`;
