import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetailes = () => {
  const { id } = useParams();
  const [post, setpost] = useState(null); //jehetu ekta object pabo
  const [isLoading, setisLoading] = useState(true);
  const [errorMessage, seterrorMessage] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setpost(data);
        setisLoading(false);
        seterrorMessage("");
      })
      .catch((err) => {
        seterrorMessage(err.message);
        setisLoading(false);
        setpost([]);
      });
  }, []);

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {errorMessage && <h3>{errorMessage}</h3>}
      <h2>Your Targeted Post</h2>
      <p> post id {id}</p>
      <p>title- {post?.title}</p>
    </div>
  );
};
export default PostDetailes;
