import React from 'react';

const PostList = ({ posts, comments }) => {
  return (
    <div className="post-list">
      <h3>Recent Posts</h3>
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <h4>{post.content}</h4>
          <p>Post ID: {post.id}</p>
          <div className="comments">
            <h5>Comments:</h5>
            {comments
              .filter((comment) => comment.postid === post.id)
              .map((comment) => (
                <p key={comment.id}>{comment.content}</p>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
