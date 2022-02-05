import React from 'react';

export default function Logout ({user, dispatch}){
    return(
        <form onSubmit = {
            e =>{ e.preventDefault();
            dispatch({type : 'LOGOUT'})
                }
            }>
            <h4>Logged in as : {user}  </h4>
            <input type = "submit" value = "Logout"></input>
        </form>
    );
}