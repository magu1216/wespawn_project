import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "./Button.js";
import toast, { Toaster } from "react-hot-toast";

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
      notify();
    });
  }

  const notify = () => toast.success("Successfully uploaded!");

  return (
    <>
      <UploadWrapper onSubmit={fileUploadHandler}>
        <Input name="image" type="file" onChange={fileSelectedHandler} />
        <Submit type="submit">Start Upload</Submit>
      </UploadWrapper>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

const UploadWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input.attrs((props) => ({
  type: "file",
}))`
  font-size: 10px;
  width: 200px;
  border-radius: 3px;
  border: 1px solid purple;
  display: block;
  padding: 10px;
  margin: 20px;
`;

const Submit = styled.button.attrs((props) => ({
  type: "submit",
}))`
  font-size: 15px;
  font-weight: bold;
  background-color: white;
  width: 150px;
  height: 50px;
  border-radius: 25px;
  border: none;
  box-shadow: ${(props) =>
    props.isActive
      ? "inset 4px 4px 5px var(--secondary-gray), inset -4px -4px 6px var(--shadow-gray)"
      : "inset 0 0 4px black"};
`;
