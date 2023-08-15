import React from "react";


export default function Confirmation(props){
    const {created, id, name} = props;
    return(
        <div className="confirmation-body">
            <div className="confirmation-banner">
                <h1>Thanks {name}!</h1>
                <h2>Order Successfully Placed</h2>
            </div>
            <div className="confirmation-details">
                <h3>Your order was placed on: {created}</h3>
                <p>Your order confirmation numbers is: {id}</p>
            </div>
        </div>
    )
}