import React from "react";
import "./FoodCart.css";

const FoodCart = (props) => {
 return(
       <div>
           <img src={props.img}alt=""/>
           <h1> {props.FoodCart}</h1>
        </div>
    );
};
export default FoodCart;

