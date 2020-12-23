import styled from "styled-components";
import IndicatorDot from "./IndicatorDot.js";

export default function StatusList({
  activePlatform,
  onChangeActivePlatform,
  platforms,
}) {
  function switchStatus(status) {
    onChangeActivePlatform(status);
  }

  return (
    <StatusContainer>
      {/* platforms.length = Sicherheitsabfrage um kein leeres array zu mappen */}
      {platforms.length > 0 &&
        platforms.map((status) => (
          <StatusBox
            onClick={() => switchStatus(status)}
            key={status.id}
            color={status.color}
            isActive={status.id === activePlatform.id}
          >
            <IndicatorDot
              color={status.id === activePlatform.id ? status.color : "white"}
              isActive={status.id === activePlatform.id}
            />
            {status.name} {status.version}
          </StatusBox>
        ))}
    </StatusContainer>
  );
}

const StatusBox = styled.div`
  color: black;
  display: flex;
  padding: 10px 15px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  gap: 40px;
  font-size: 20px;
  text-shadow: ${(props) =>
    props.isActive ? `1px 1px 2px ${props.color}` : null};
  border: ${(props) =>
    props.isActive ? `1px solid ${props.color}` : undefined};
`;

const StatusContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
`;
