import styled from "styled-components";
import TextBox from "./TextBox";

export default function ProfilePlatforms({ platforms }) {
  return (
    <SectionWrapper>
      <h3>Where i play</h3>
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
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  margin-left: 10px;
  margin-right: 10px;

  h3 {
    padding: 5px;
  }
`;

const Platforms = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-top: 0.5px solid white;
`;
