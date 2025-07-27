import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  // Step 6: Fetch posts and update state
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then((data) => {
        const postList = data.map(post => new Post(post.id, post.title, post.body));
        this.setState({ posts: postList });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  // Step 7: Fetch posts on component mount
  componentDidMount() {
    this.loadPosts();
  }

  // Step 9: Error handling
  componentDidCatch(error, info) {
    alert('An error occurred: ' + error.message);
    console.error('Error details:', info);
  }

  // Step 8: Render posts
  render() {
    const { posts } = this.state;

    return (
      <div>
        <h2>Blog Posts</h2>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
