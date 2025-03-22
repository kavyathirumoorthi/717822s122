import React from "react";

const PostList = ({ posts, comments }) => {
  return (
    <div className="post-list">
      <h3>Recent Posts About India</h3>
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <img
            src={`https://source.unsplash.com/600x400/?india,${post.title}`}
            alt="Post"
            className="post-image"
          />
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <div className="comments">
            <h5>Comments:</h5>
            {comments
              .filter((comment) => comment.postId === post.id)
              .map((comment) => (
                <p key={comment.id}>{comment.body}</p>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
