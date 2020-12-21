import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPictures } from "../services/getPlatformList";

export default function ProfilePlatforms() {
  const [pictures, setPictures] = useState([]);

  const loadPictures = async () => setPictures(await getPictures());

  useEffect(() => loadPictures(), []);

  return (
    <>
      <h3>Uploads</h3>
      <Uploads>
        {pictures.map((pic) => (
          <img src={`http://localhost:4000/images/${pic}`} alt="" />
        ))}
      </Uploads>
    </>
  );
}

const Uploads = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: auto;
  }
`;
