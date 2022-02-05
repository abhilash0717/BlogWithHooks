import React, { useState, useReducer } from 'react';
import UserBar from './src/user/UserBar';
import CreatePost from './src/post/CreatePost';
import PostList from './src/post/PostList';
import appReducer from './src/Reducer';

export default function App (){
  const defaultposts = [
    { title: 'React Hooks', content: 'The greatest thing since sliced bread!', author: 'Daniel Bugl' },
    { title: 'Using React Fragments', content: 'Keeping the DOMtree clean!', author: 'Daniel Bugl' }
   ]
   //below is the line used for using the reducer
   const [state, dispatch] = useReducer(appReducer, {user : '', posts : defaultposts});
   const [user, posts] = state;
   return(
    <>
    <h1>This is the app page</h1>
    <div style = {{padding : 8}}>
      <UserBar user = {user} dispatch = {dispatch}/>
      <br />
      {user && <CreatePost user = {user} posts = {posts} dispatch = {dispatch} />}
      <PostList posts = {posts} />
    </div>
    </>
  );
}