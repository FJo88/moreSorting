import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const [desc, setDesc] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setComments(response.data);
      });
  }, []);

  if (comments && desc) {
    comments.sort((a, b) => b.postId - a.postId);
  } else if (comments) {
    comments.sort((a, b) => a.postId - b.postId);
  }

  return (
    <>
      
      <div>
        <table>
          <tr>
            <th>Id</th>
            <th>
              UserId
              {desc ? (
                <FaChevronDown onClick={() => setDesc(!desc)} />
              ) : (
                <FaChevronUp onClick={() => setDesc(!desc)} />
              )}
            </th>
            <th>Comment Title</th>
            <th>Email</th>
          </tr>
          {/* .sort((a, b) => b.postId - a.postId) */}
          {comments
            ? comments.map((comment, i) => {
                return (
                  <tr key={i}>
                    <td>{comment.id}</td>
                    <td>{comment.postId}</td>
                    <td style={{fontWeight: "600"}}>{comment.name.toUpperCase()}</td>
                    <td>{comment.email}</td>
                  </tr>
                );
              })
            : null}
        </table>
      </div>
    </>
  );
};

export default Comments;
