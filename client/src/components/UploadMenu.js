import Axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function UploadMenu() {
  const [selectedFile, setSelectedFile] = useState();
  function fileSelectedHandler(event) {
    setSelectedFile(event.target.files[0]);
  }

  function fileUploadHandler() {
    axios.post("");
  }

  return (
    <>
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={}>Upload</button>
    </>
  );
}
