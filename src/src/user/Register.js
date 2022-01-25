import React, {useState} from 'react';

export default function Register ({setUser}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    function handleUsername(event){
        event.preventDefault();
        setUsername(event.target.value);
    }
    function handlePassword(event){
        event.preventDefault();
        setPassword(event.target.value);
    }
    function handleRepeatPassword(event){
        event.preventDefault();
        setRepeatPassword(event.target.value);
    }
    return(
        <form onSubmit={e =>
            {
                 e.preventDefault();
                 setUser(username)
            }}>
            <label htmlFor="register-username">Username : </label>
            <input value = {username} onChange={handleUsername} type="text" name="register-username" id = "register-username"></input>
            <label htmlFor="register-password">Password : </label>
            <input value = {password} onChange = {handlePassword} type="password" name="register-password" id = "register-password"></input>
            <label htmlFor="register-password-repeat">Repeat Password : </label>
            <input value = {repeatPassword} onChange={handleRepeatPassword}  type="password" name="register-password-repeat" id = "register-password-repeat"></input>
            <input type = "submit" value="Register" disabled = {username.length === 0 || password.length ===0 || password !== repeatPassword} />
        </form>
    );
}