import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";

const PostDetailes = () => {
  const { id } = useParams();
  const [post, setpost] = useState(null); //jehetu ekta object pabo

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setpost(data));
  }, []);

  return (
    <div>
      <h2>Your Targeted Post</h2>
      <p> post id {id}</p>
      <p>title- {post?.title}</p>
    </div>
  );
};
export default PostDetailes;
