import React, {useState} from 'react';

export default function CreatePost ({user, posts, dispatch}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function handleTitle(evt){
        setTitle(evt.target.value);
    }

    function handleContent(evt){
        setContent(evt.target.value);
    }

    function handleCreate(){
       dispatch({type : 'CREATE_POST', title, content, author : user })
    }
    return(
       <form onSubmit = {e =>{ 
           e.preventDefault();
           handleCreate();
           }}>
           <div>
               Author : <b>{user}</b>
           </div>
           <div>
               <label htmlFor="create-title">Title : </label>
               <input value = {title} onChange={handleTitle}  type = "text" class = "create-title" id = "create-title"></input>
           </div>
           <textarea value = {content} onChange={handleContent}></textarea>
           <input onSubmit={e=> {e.preventDefault(); handleCreate()}}  type = "submit" value = "create"></input>
       </form> 
    );
}