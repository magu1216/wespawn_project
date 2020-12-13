import { useState, useEffect } from "react";
import styled from "styled-components";
import getPlatformList from "../services/getPlatformList.js";
import IndicatorDot from "./IndicatorDot.js";

export default function StatusList() {
  const [platforms, setPlatforms] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    async function doGet() {
      const platforms = await getPlatformList();
      setPlatforms(platforms);
    }
    doGet();
  }, []);

  function toggleStatus() {
    setIsActive(!isActive);
  }

  return (
    <>
      {/* status.length = Sicherheitsabfrage um kein leeres array zu mappen */}
      {platforms.length > 0 &&
        platforms.map((status) => (
          <StatusBox
            onClick={toggleStatus}
            key={status.id}
            color={status.color}
            isActive={isActive}
          >
            <IndicatorDot color={status.color} isActive={isActive} />
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
  border: 1px solid ${(props) => props.color};
`;
