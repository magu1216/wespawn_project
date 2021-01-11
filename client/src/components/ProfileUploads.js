import React from "react";
import styled from "styled-components";

export default function ProfileUploads({ pictures }) {
  return (
    <SectionWrapper>
      <h3>My Snapshots</h3>
      <Uploads>
      {pictures
          .slice(0)
          .reverse()
          .map((pic) => (
            <img src={`http://localhost:4000/picture/${pic}`} alt="" />
          ))}
      </Uploads>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 85px;
  h3 {
    padding: 5px;
  }
`;

const Uploads = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  border-top: 0.5px solid white;

  img {
    width: 150px;
    height: auto;
  }
`;
