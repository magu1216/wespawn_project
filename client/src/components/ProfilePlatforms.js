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
  gap: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
