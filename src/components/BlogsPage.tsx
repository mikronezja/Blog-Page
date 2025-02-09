import { useNavigate } from "react-router-dom";
import { BlogEnteringAnim, BlogTitle } from "../Styles/BlogsPageStyles";
import { useRef } from "react";

const BlogsPage = () => {
  const navigate = useNavigate();
  const keys = Object.keys(localStorage).filter((key) =>
    key.startsWith("blog:")
  );
  const todos = keys.map((key) =>
    JSON.parse(localStorage.getItem(key) as string)
  );

  const time_diff = 0.4; // DOKONCZYC KIEDYS!!!

  return todos.map((item, index) => {
    const delay = `${index * time_diff}s`;
    return (
      <BlogEnteringAnim delay={delay} key={index}>
        <BlogTitle
          onClick={() => {
            navigate(`/blog/${item.id}`);
          }}
        >
          {item.title}
        </BlogTitle>
      </BlogEnteringAnim>
    );
  });
};

export default BlogsPage;
