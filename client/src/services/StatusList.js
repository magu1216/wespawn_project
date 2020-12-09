import React, { useState, useEffect } from "react";
import axios from "axios";

function StatusList() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/status")
      .then((res) => setStatus(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <ul>
        {status.map((status) => (
          <li key={status.id}>
            {status.platform}
            {status.color}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatusList;
