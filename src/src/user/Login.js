import React, {useState} from "react";

export default function Login({dispatch}) {
  const [username , setUsername] = useState('');

  function handleUsername(event){
    setUsername(event.target.value);
  }
  return (
    <form onSubmit={(e) =>{
       e.preventDefault();
      dispatch({type : 'LOGIN', username})   
     
       }}>
      <label htmlFor="login-username">Username : </label>
      <input type="text" id="login-username" name="login-username" onChange={handleUsername} />
      <label htmlFor="login-password">Password : </label>
      <input type="text" id="login-password" name="login-password" />
      <input type="submit" value="Login" disabled = {username.length === 0} />
    </form>
  );
}