import styled from "styled-components";
import TextBox from "./TextBox";

export default function ProfilePlatforms({ platforms }) {
  return (
    <>
      <h3>Platforms / Clients</h3>
      <Platforms>
        {platforms.length > 0 &&
          platforms.map((platform) => (
            <TextBox
              key={platform.id}
              bordercolor={platform.color}
              text={platform.name + " " + platform.version}
            />
          ))}
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
