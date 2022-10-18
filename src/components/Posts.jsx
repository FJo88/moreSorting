import { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <div className="post-header">
        <h2 style={{ fontSize: "45px" }}>Posts</h2>
        <input
          type="text"
          placeholder="Search Title..."
          onChange={(event) => setInputValue(event.target.value)}
        ></input>
      </div>

      <div className="post-grid">
        {posts
          ? posts
              .filter((post) => {
                if (inputValue == "") {
                  return post;
                } else if (
                  post.title.toLowerCase().includes(inputValue.toLowerCase())
                ) {
                  return post;
                }
              })
              .map((post, i) => {
                return (
                  <div className="post-card" key={i}>
                    <h2>Title:</h2>
                    <h3>{post.title}</h3>
                    <h5>UserId: {post.userId}</h5>
                  </div>
                );
              })
          : null}
      </div>
    </>
  );
};

export default Posts;
