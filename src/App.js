import React, { useState, useReducer } from 'react';
import UserBar from './src/user/UserBar';
import CreatePost from './src/post/CreatePost';
import PostList from './src/post/PostList';

export default function App (){
  const defaultposts = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
    { title: 'Using React Fragments', content: 'Keeping the DOMtree clean!', author: 'Daniel Bugl' }
   ]

   function userReducer(state, action){
      switch(action.type){
        case 'LOGIN':
        case 'REGISTER':
          return action.username
       case 'LOGOUT':
         return '';
        default : 
          throw new Error()
      }
   }

  const [user, dispatchUser] = useReducer(userReducer, '');
  const [posts, setPosts] = useState(defaultposts);
  return(
    <>
    <h1>This is the app page</h1>
    <div style = {{padding : 8}}>
      <UserBar user = {user} dispatch = {dispatchUser}/>
      <br />
      {user && <CreatePost user = {user} posts = {posts} setPosts = {setPosts} />}
      <PostList posts = {posts} />
    </div>
    </>
  );
}