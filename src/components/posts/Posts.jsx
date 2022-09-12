import React from "react";
import { PostsData } from "../../data/postData";
import Post from "../post/Post";
import "./posts.css";

const Posts = () => {
  return (
    <div className="posts">
      {PostsData.map((post, id) => (
        <Post data={post} id={id} />
      ))}
    </div>
  );
};

export default Posts;
