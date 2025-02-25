// App.jsx
import React from 'react';
import PostCard from './components/postcard';

const App = () => {
  // Array of post data
  const posts = [
    {
      id: 1,
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
      username: 'john_doe',
      content: 'Just had a great lunch! #foodie'
    },
    {
      id: 2,
      profilePicture: 'https://randomuser.me/api/portraits/women/1.jpg',
      username: 'jane_smith',
      content: 'Exploring the city today! #adventure'
    },
    // Add more posts as needed
  ];

  return (
    <div className="App" style={{ padding: '20px', backgroundColor: '#efefef' }}>
      <h1>Home Page</h1>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default App;
