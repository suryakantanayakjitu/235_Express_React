import React, { useState } from 'react';
// import Demo from './Demo';
import Child1 from './FirstChild';
 
export var userDetailsContext  = React.createContext(null);


function App(){

  // let [userObj, setUserObj] = useState({ name : "Scott", age : 25, email : "scott@gmail.com"});
   let [userArray, setUserArray] = useState(["Jitu", "Anup", "Vicky", "Ashmin"]);
    return (
      <div style={{margin:"10px", border:"2px solid Blue"}}>  
        <h3>This is the Parent Component</h3>    
        <hr/>

        {/* Passing a object{} in the Context() in the below provider*/}
        {/* <userDetailsContext.Provider  value={userObj}>
            <Demo />
        </userDetailsContext.Provider>  */}
          

        {/* Passing an array[] in the Context() in the below provider*/}
        <userDetailsContext.Provider  value={userArray}>
            <Child1/>
        </userDetailsContext.Provider> 

      </div>
    );   
}

export default App;