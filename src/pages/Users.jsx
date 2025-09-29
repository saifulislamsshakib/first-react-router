import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState();
  const [errorMessage, seterrorMessage] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setisLoading(false);
        seterrorMessage("");
      })
      .catch((err) => {
        seterrorMessage(err.message);
        setisLoading(false);
        setUsers([]);
      });
  }, []);
  return (
    <div className="Post-container">
      <h2>All users</h2>
      {isLoading && <h3>Loading...</h3>}
      {errorMessage && <h3>{errorMessage}</h3>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user-details/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Users;
