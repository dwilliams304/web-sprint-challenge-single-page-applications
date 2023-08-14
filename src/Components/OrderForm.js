import React from "react";


export default function OrderForm(props){
    return(
        <div>
            <h2>Order Form</h2>
            <form id='pizza-form'>
                <div className='orderform-container' id='orderform-name'>
                    <label>Your name:
                        <input 
                            id='name-input'
                            type='text'
                            name='customerName'
                            placeholder='Enter your name here...'
                        />
                    </label>
                </div>

                <div className='orderform-container' id='orderform-size'>
                    <label>Pizza Size:
                        <select id='size-dropdown'>
                            <option>---Select Size---</option>
                            <option>Slice</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Extra Large</option>
                        </select>
                    </label>
                </div>

                <div className='orderform-container' id='orderform-toppings'>
                    <label>Toppings:
                        <input type='checkbox' value='Sausage' />
                        <input type='checkbox' value='Pepperoni'/>
                        <input type='checkbox' value='Diced Tomatoes'/>
                        <input type='checkbox' value='Mushrooms'/>
                    </label>
                </div>

                <div className='orderform-container' id='orderform-special'>
                    <label>Special Instructions:
                        <input 
                            id='special-text'
                            type='text'
                            name='specialInstructions'
                            placeholder='Leave blank if no additional instructions...'
                        />
                    </label>
                </div>

                <div className='orderform-container' id='orderform-submit'>
                    <input id='order-button' type='submit' vale='Place Order'/>
                </div>
            </form>
        </div>
    )
}