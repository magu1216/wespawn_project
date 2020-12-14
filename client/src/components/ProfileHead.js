import React from "react";
import styled from "styled-components";
import TextBox from "./TextBox";
import UserImg from "./UserImg";

export default function ProfileHead({ activePlatform }) {
  return (
    <Head>
      <UserImg
        activePlatform={activePlatform}
        gridRow="1 / 3"
        gridColumn="1 / 2"
      />
      <TextBox color="var(--primary-gray)" text="Bud Spencer" />
      <TextBox
        color={activePlatform.color}
        text={
          activePlatform.name
            ? activePlatform.name + " " + activePlatform.version
            : "offline"
        }
        activePlatform={activePlatform}
      />
    </Head>
  );
}

const Head = styled.section`
  display: grid;
  padding: 65px 10px 10px 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
`;
