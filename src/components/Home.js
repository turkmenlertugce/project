import React, { Component, useEffect } from 'react'

const Home = (props) => {
    
    console.log("qwe", props.user);
    
 
    if(!(props.user===undefined || props.user===null)){
        return(
            <div>
                <h2>Welcome, User</h2>
                <p></p>          
            </div>

            
        )
       
    }
    return (
        <h2> You are not logged in</h2>
    )
}

export default Home
