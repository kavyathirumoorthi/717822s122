import React, { useEffect, useState } from 'react';
import PostList from './PostList';
import { getUsers, getPosts, getComments } from './Api';


const Dashboard = ({ token }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUsers(token);
      const postData = await getPosts(1); // Fetch posts of user 1
      const commentData = await getComments(150); // Fetch comments on post 150

      setUsers(userData);
      setPosts(postData);
      setComments(commentData);
      setLoading(false);
    };

    fetchData();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h2>Welcome to Social Media Analytics</h2>
      <PostList posts={posts} comments={comments} />
    </div>
  );
};

export default Dashboard;
