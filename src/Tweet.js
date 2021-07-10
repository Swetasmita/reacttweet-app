import React from 'react';
import './App.css';


function Tweet(props){      //passing props a parameter
    return(
 <div className="tweet"> 
     <h3>{props.name}</h3>
     <p>{props.message}</p>
     <h3>Number of Likes</h3>
 </div>
 );
}

export default Tweet;