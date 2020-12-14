import { useState, useEffect } from "react";
import styled from "styled-components";
import getPlatformList from "../services/getPlatformList.js";
import IndicatorDot from "./IndicatorDot.js";

export default function StatusList({ activePlatform, onChangeActivePlatform }) {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    async function doGet() {
      const platforms = await getPlatformList();
      setPlatforms(platforms);
    }
    doGet();
  }, []);

  function switchStatus(status) {
    onChangeActivePlatform(status);
  }

  return (
    <>
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
              color={status.color}
              isActive={status.id === activePlatform.id}
            />
            {status.name} {status.version}
          </StatusBox>
        ))}
    </>
  );
}

const StatusBox = styled.div`
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
