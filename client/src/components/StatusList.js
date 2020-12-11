import { useState, useEffect } from "react";
import styled from "styled-components";
import { getPlatformList } from "../services/getPlatformList.js";

export default function StatusList() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    async function doGet() {
      const status = await getPlatformList();
      setStatus(status);
    }
    doGet();
  }, []);

  return (
    <>
      {status.length > 0 &&
        status.map((status) => (
          <StatusBox color={status.color} key={status.id}>
            {status.platform}
          </StatusBox>
        ))}
    </>
  );
}

const StatusBox = styled.div`
  background-color: ${(props) => props.color};
`;
