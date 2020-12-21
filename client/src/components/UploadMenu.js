import React, { useState } from "react";
import axios from "axios";
import cors from "cors";
import styled from "styled-components";
import Button from "./Button.js";

export default function UploadMenu() {
  const [selectedFile, setSelectedFile] = useState([]);

  function fileSelectedHandler(event) {
    setSelectedFile(event.target.files[0]);
  }

  function fileUploadHandler() {
    const fd = new FormData();
    fd.append("image", selectedFile, selectedFile.name);
    axios
      .post("https://frozen-gorge-61178.herokuapp.com/uploads", fd)
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <UploadWrapper>
      <input type="file" name="uploadfile" onChange={fileSelectedHandler} />
      <Button text="Upload" onClick={fileUploadHandler} />
    </UploadWrapper>
  );
}

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
