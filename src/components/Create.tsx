import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormStyle,
  StyledButton,
  StyledInput,
  StyledTextArea,
} from "../Styles/FormStyles";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const addToLocalStorage = () => {
    const currId = localStorage.getItem("blogNum");
    const blogNum = currId ? Number(currId) : 0;

    const post = {
      id: Number(localStorage.getItem("blogNum")),
      title,
      body,
    };

    localStorage.setItem(`blog:${blogNum}`, JSON.stringify(post));
    localStorage.setItem("blogNum", String(blogNum + 1));

    setTitle("");
    setBody("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToLocalStorage();
    navigate("/blog");
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={title}
        required
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <StyledTextArea
        value={body}
        required
        placeholder="Body"
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <StyledButton type="submit">DODAJ</StyledButton>
    </FormStyle>
  );
};

export default Create;
