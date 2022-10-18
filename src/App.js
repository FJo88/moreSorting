import { useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Todos from "./components/Todos";
import Users from "./components/Users";

function App() {
  const [posts, setPosts] = useState(false);
  const [comments, setComments] = useState(false);
  const [todos, setTodos] = useState(false);
  const [users, setUsers] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sorting Practise</h1>
      </header>
      <div className="container">
        <div className="sidebar">
          <h1
            onClick={() => {
              setPosts(!posts);
              setComments(false);
              setTodos(false);
              setUsers(false);
            }}
          >
            Posts
          </h1>
          <h1
            onClick={() => {
              setComments(!comments);
              setPosts(false);
              setTodos(false);
              setUsers(false);
            }}
          >
            Comments
          </h1>
          <h1
            onClick={() => {
              setPosts(false);
              setComments(false);
              setTodos(!todos);
              setUsers(false);
            }}
          >
            Todos
          </h1>
          <h1
            onClick={() => {
              setPosts(false);
              setComments(false);
              setTodos(false);
              setUsers(!users);
            }}
          >
            Users
          </h1>
        </div>

        <div className="content">
          {posts ? <Posts /> : null}
          {comments ? <Comments /> : null}
          {todos ? <Todos /> : null}
          {users ? <Users /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
