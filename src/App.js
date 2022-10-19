import { useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Users from "./components/Users";
import { FaStar } from "react-icons/fa";

function App() {
  const [posts, setPosts] = useState(false);
  const [comments, setComments] = useState(false);
  const [users, setUsers] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sorting Exersice</h1>
      </header>
      <div className="container">
        <div className="sidebar">
          <h1
            onClick={() => {
              setPosts(!posts);
              setComments(false);
              setUsers(false);
            }}
          >
            Posts
          </h1>
          <h1
            onClick={() => {
              setComments(!comments);
              setPosts(false);
              setUsers(false);
            }}
          >
            Comments
          </h1>

          <h1
            onClick={() => {
              setPosts(false);
              setComments(false);
              setUsers(!users);
            }}
          >
            Users
          </h1>
        </div>

        <div className="content">
          <h1 className="greeting">
            Välkommen Filip <FaStar style={{ color: "yellow" }} />
          </h1>
          {posts ? <Posts /> : null}
          {comments ? <Comments /> : null}
          {users ? <Users /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
