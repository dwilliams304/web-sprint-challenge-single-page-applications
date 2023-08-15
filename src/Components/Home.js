import React from "react";
import { useNavigate } from "react-router-dom";



export default function Home(){

    const nav = useNavigate();

    const orderPizza = () => {
        nav('pizza');
    }
    return(

        <div className="home-container">        
            <div className='img-carousel'>
                <button className='order-btn' onClick={orderPizza}>Order Pizza</button>
            </div>
        </div>


    )



}