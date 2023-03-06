import { useEffect, useState } from "react";
import Post from "../components/Post";

export default function IndexPage() {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4040/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  }, [])
  return (
    <>
      {posts.length > 0 && posts.map(posts => (
        <Post {...posts} />
      ))}
    </>
  );
}
