import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetailes = () => {
  const { id } = useParams();
  const [users, setUsers] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>User Detailes</h2>
      <p> user id {id}</p>
      <p>User name is - {users?.name}</p>
    </div>
  );
};
export default UserDetailes;
