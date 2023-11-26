import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const PostItem = ({ post }) => {
  const router = useNavigate();

  return (
    <article className="post">
      <section
        className="post__content"
        onClick={() => router(`/posts/${post.id}`)}
      >
        <div className="post__content__title">
          <span>{post.id}.</span>
          <div className="post__content__title__info">{post.title}</div>
        </div>
        <p className="post__content__body">{post.body}</p>
      </section>
    </article>
  );
};

export default PostItem;
