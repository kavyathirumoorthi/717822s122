const API_BASE_URL = "https://dummyjson.com";

// Get posts with images and titles
export const getPosts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

// Get comments for a specific post
export const getComments = async (postId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/comments/post/${postId}`);
    const data = await response.json();
    return data.comments || [];
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};
