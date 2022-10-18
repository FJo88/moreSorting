import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <>
      <div className="user-grid">
        {users
          ? users.map((user) => {
              return (
                <div className="user-card">
                <div className="user-cardleft">
                  <img src="./image/anonym.jpg"/>
                </div>
                <div className="user-cardright">
                    <h4 style={{color: "darkred"}}>{user.company.bs.toUpperCase()}</h4>
                    <h3 style={{color: "darkblue"}}>Name: {user.name}</h3>
                    <h4>Email: {user.email}</h4>
                    <h5 style={{color: "darkgreen"}}>Company: {user.company.name}</h5>
                </div>
                </div>
              );
            })
          : null}
         
      </div>
    </>
  );
};

export default Users;
