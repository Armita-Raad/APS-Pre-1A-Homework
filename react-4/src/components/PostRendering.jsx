import { useState, useEffect } from "react";

export default function PostRendering() {
  const [data, setData] = useState({ loading: true, posts: [] });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        setData({ loading: false, posts });
      } catch (error) {
        console.log(error);
        setData({ loading: true, posts: [] });
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {data.loading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {data.posts.map((post) => {
            return (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
