import React from "react";
import styled from "styled-components";
import TextBox from "./TextBox";

export default function ProfilePlatforms() {
  return (
    <>
      <h3>Platforms / Clients</h3>
      <Platforms>
        <TextBox color="white" text="Username" />
        <TextBox color="green" text="XBox" />
        <TextBox color="red" text="Username" />
        <TextBox color="purple" text="XBox" />
        <TextBox color="yellow" text="Username" />
        <TextBox color="salmon" text="XBox" />
        <TextBox color="orange" text="Username" />
        <TextBox color="hotpink" text="XBox" />
      </Platforms>
    </>
  );
}

const Platforms = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
`;
