import React, { useEffect, useState } from "react";
import PostList from "./PostList";
import { getPosts, getComments } from "./Api";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const postData = await getPosts(); // Get posts
      const commentData = await getComments(1); // Get comments for post 1

      console.log("Posts:", postData);
      console.log("Comments:", commentData);

      setPosts(Array.isArray(postData) ? postData : []);
      setComments(Array.isArray(commentData) ? commentData : []);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h2>Welcome to Social Media Analytics - India Edition</h2>
      <PostList posts={posts} comments={comments} />
    </div>
  );
};

export default Dashboard;
