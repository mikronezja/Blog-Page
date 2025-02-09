import React from "react";
import { useParams } from "react-router-dom";
import { BlogTitle } from "../Styles/BlogsPageStyles";
import { TextBox } from "../Styles/CuteTextStyle.tsx";

const Blog = () => {
  const { id } = useParams<{ id: string }>();

  // Safely parse the blog post from localStorage
  const blogPost =
    id && localStorage.getItem(`blog:${id}`)
      ? JSON.parse(localStorage.getItem(`blog:${id}`) as string)
      : null;

  return (
    <>
      <div>
        {blogPost ? (
          <div>
            <BlogTitle>{blogPost.title}</BlogTitle>
            <div
              style={{
                fontFamily: "Cute big font",
                border: "2px solid #c6302c",
                borderRadius: "1vw",
                boxShadow: "0.1vw 0.1vw 0px #c6302c",
                fontSize: "1.5vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#f4879c",
                overflowWrap: "break-word",
                lineHeight: "3.0",
                backgroundColor: "#fcf8f5",
                width: "30vw",
                height: "auto",
                position: "absolute",
                top: "30%",
                left: "51%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {blogPost.body}
            </div>
          </div>
        ) : (
          <p>Blog post not found.</p>
        )}
      </div>
    </>
  );
};

export default Blog;
