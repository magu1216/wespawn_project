import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "./Button.js";

export default function UploadMenu() {
  const [selectedFile, setSelectedFile] = useState([]);

  function fileSelectedHandler(event) {
    setSelectedFile(event.target.files[0]);
  }

  function fileUploadHandler(event) {
    event.preventDefault();
    const fd = new FormData();
    fd.append("image", selectedFile, selectedFile.name);
    axios.post(`http://localhost:4000/picture`, fd).then((res) => {
      console.log(res);
    });
  }

  return (
    // <UploadWrapper>
    //   <input type="file" name="uploadfile" onChange={fileSelectedHandler} />
    //   <Button text="Upload" onClick={fileUploadHandler} />
    // </UploadWrapper>
    <form onSubmit={fileUploadHandler}>
      <input name="image" type="file" onChange={fileSelectedHandler} />
      <button type="submit">Go!</button>
    </form>
  );
}

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
