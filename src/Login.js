// // import React from "react";
// // import  "./Login.css";


// // function Login () {
// //   return (
// //     <div class ="main">
// //         <h1>Google</h1>
// //         <h2>Login</h2>
// //         <h4>Name:</h4>
// //     <input type="text" placeholder="enter email" id="email"/>
// //      <h4>Password:</h4>
// //     <input type="text" placeholder="enter password" id="pasword"/>
// //     <button id="one" onClick ="AttemptClick()">submit</button>
// //     <p>already have account?<a href="#" >signup</a></p>
// //     </div>
// //   );
// // }

// // export default Login;

//         }
//     };
    

//   return
 import React from "react";
 import"./Login.css";
 import {replace} from"react-router-dom";

function Login (){
    var userdata =[
        {username: "kiara", passcode: 457,cart: []},
        {username: "Hyraa", passcode: 687,cart: []},
        {username: "Lucky", passcode: 397,cart: []},
    ];
    const signup =() =>{
      window.location.replace("/Home");
        // var username = document.getElementById("username").value; 
        // var passcode= document.getElementById("passcode").value;
        // var  activeuserdetail=userdata.filter((data)=>{
        //     return username===data.username;
        // });
        // console.log(activeuserdetail);
        // if(activeuserdetail.length > 0){
        //     if(activeuserdetail[0].passcode==passcode){
        //         localStorage.setItem("username", activeuserdetail[0].username);
        //         window.location.replace("/Home");
        //     }else{
        //         console.log("Wrong passcode");
        //     }
        // }
      };
    
  return (
  <div className ="main">
    <h1>Google</h1>
    <h2>Login</h2>
    <h4>Name:</h4>
    <input type="text" placeholder="enter name "id="username "/>
     <h4>Password:</h4>
    <input type="text" placeholder="password" id="passcode"/>
    <button id="one" onClick ={signup}>submit</button>
    <p>already have account?<a href="#" >signup</a></p>
    </div>
);
}

    
  

export default Login; 