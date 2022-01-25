import React from 'react';

export default function Logout ({user, setUser}){
    return(
        <form onSubmit = {
            e =>{ e.preventDefault();
            setUser('');
                }
            }>
            <h4>Logged in as : {user}  </h4>
            <input type = "submit" value = "Logout"></input>
        </form>
    );
}