import React, { useState } from 'react';
import UserBar from './src/user/UserBar';
import CreatePost from './src/post/CreatePost';
import PostList from './src/post/PostList';

export default function App (){
  const [user, setUser] =  useState('');
  const [posts, setPosts] = useState(defaultposts);
const defaultposts = [
 { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
 { title: 'Using React Fragments', content: 'Keeping the DOMtree clean!', author: 'Daniel Bugl' }
]
  return(
    <>
    <h1>This is the app page</h1>
    <div style = {{padding : 8}}>
      <UserBar user = {user} setUser = {setUser} />
      <br />
      {user && <CreatePost user = {user} posts = {posts} setPosts = {setPosts} />}
      <PostList posts = {posts} />
    </div>
    </>
  );
}