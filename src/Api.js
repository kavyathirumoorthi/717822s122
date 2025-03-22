const API_BASE_URL = 'http://20.244.56.144/test';

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    return await response.json();
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
};

export const getUsers = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const getPosts = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/posts`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const getComments = async (postId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};
