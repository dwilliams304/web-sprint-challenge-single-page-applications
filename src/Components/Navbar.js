import React from "react";
import { useNavigate } from "react-router-dom";


export default function NavBar(){

    const navTo = useNavigate();

    const goToOrderForm = () => {
        navTo('pizza');
    }

    const goToHome = () => {
        navTo('/');
    }

    return(
        <nav>
            <h2>Bloomtech Eats</h2>
            <button id='home-btn' onClick={goToHome}>Home</button>
            <button id='order-pizza' onClick={goToOrderForm}>Order Now!</button>
        </nav>
    )
}