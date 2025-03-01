

// import React from"react";
// import logo from "./amaz.jpg";
// import "./Home.css";
// const Home =()=>{
//   return(
//     <div ClassName="navBar">
//     <img src={logo}alt=""/>
//      <div ClassName="menuContainer">
//       <p>Home</p>
//       <p>About</p>
//       <p>Blog</p>
//       <p>Contact</p>
//       <button>login</button>
//      </div>
//     </div>
//   );
// }
// export default Home;
import React from "react";
import "./Home.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img from"./imgl.jpg";

const NavBar =()=>(
  <nav className ="navbar">
   <img src={img}/>
    <div className="menucontainer">
      <p> Home</p>
      <p>About</p>
      <p>Contact Us</p>
      <button>Login</button>
    </div>
  </nav>
);
const Home=()=>{
  return(
    <div>
      <NavBar/>
      <div className="container">
        <div className="card">
          <img src={img1}alt="img1.jpg"/>
          <h2>DRESOUL</h2>
          <h3> Solid jumpsuit</h3>
          <p>$49</p>
          <button>Add to cart</button>
        </div>
        <div className="card">
          <img src={img2}alt="img2.jpg"/>
          <h2> LERIYA FASHION</h2>
          <h3>Belted Jumpsuits</h3>
          <p>$59</p>
          <button>Add to cart</button>
        </div>
        <div className="card">
          <img src={img3}alt="img3.jpg"/>
          <h2>TANVICREATION</h2>
          <h3>Solid jumpsuits </h3>
          <p>$69</p>
          <button>Add to cart</button>
        </div>
        <div className="card">
          <img src={img4}alt="img4.jpg"/>
          <h2>AENOR FASHION</h2>
          <h3>Jean jumpsuit</h3>
          <p>$79</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default Home;