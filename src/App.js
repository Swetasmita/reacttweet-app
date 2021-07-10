import React from "react";
import Tweet from './Tweet'; 
import './index.css';
import logo from './tweet.png'; 
 
function App() {
  return (
    <div className="app">
   <img src={logo} width="200" height="180" alt="Logo" />
     <Tweet name="Dev ED" message="This ia a random Tweet"/>
     <Tweet name="John Snow" message="I am the true King"/> 
     <Tweet name="Traversy Media" message="700k my dude"/>
     <Tweet name="Mosh" message="My new course is available"/>
     </div>
  
  );
}

export default App;
