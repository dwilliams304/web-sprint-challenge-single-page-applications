import React from "react";
import { useNavigate } from "react-router-dom";


export default function OrderForm(props){

    const {values, submit, update, errors, disabled} = props;
    const navTo = useNavigate();

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
        navTo('/confirmation');
    }




    const onChange = evt => {
        const {name, value, checked, type} = evt.target;
        const valToUse = type === 'checkbox' ? checked: value;
        update(name, valToUse);
    }

    return(
        <div>
            <h2 className='orderform-header'>Customize Your Pizza!</h2>
            <form id='pizza-form' onSubmit={onSubmit}>

                <div className="errors">
                    <p>{errors.a_customerName}</p>
                    <p>{errors.b_pizzaSize}</p>
                </div>

                <div className='orderform-container' id='orderform-namesize'>
                    <label>Your name:&nbsp;&nbsp;&nbsp;
                        <input 
                            id='name-input'
                            value={values.a_customerName}
                            onChange={onChange}
                            type='text'
                            name='a_customerName'
                            placeholder='Enter your name here...'
                        />
                    </label>
                    <label>Pizza Size:&nbsp;&nbsp;&nbsp;
                        <select 
                        id='size-dropdown' 
                        name='aa_pizzaSize'
                        value={values.aa_pizzaSize}
                        onChange={onChange}>
                            <option value=''>---Select Size---</option>
                            <option value='Slice'>Slice</option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>
                            <option value='Extra Large'>Extra Large</option>
                        </select>
                    </label>
                </div>

                <h2 className="orderform-toppings-header">Toppings:</h2><br/>
                <div className='orderform-container' id='orderform-toppings'>
                    <label>Sausage&nbsp;&nbsp;
                        <input type='checkbox' name='sausage' value={values.sausage} onChange={onChange}/>
                    </label>
                    <label>Pepperoni&nbsp;&nbsp;
                        <input type='checkbox' name='pepperoni' value={values.pepperoni} onChange={onChange}/>
                    </label>
                    <label>Bacon&nbsp;&nbsp;
                        <input type='checkbox' name='bacon' value={values.bacon} onChange={onChange}/>
                    </label>
                    <label>Jalapenos&nbsp;&nbsp;
                        <input type='checkbox' name='jalapenos' value={values.jalapenos} onChange={onChange}/>
                    </label>
                    <label>Chicken&nbsp;&nbsp;
                        <input type='checkbox' name='chicken' value={values.chicken} onChange={onChange}/>
                    </label>
                    <label>Mushrooms&nbsp;&nbsp;
                        <input type='checkbox' name='mushrooms' value={values.mushrooms} onChange={onChange}/>
                    </label>
                    <label>Diced Tomatoes&nbsp;&nbsp;
                        <input type='checkbox' name='dicedtomatoes' value={values.dicedtomatoes} onChange={onChange}/>
                    </label>
                    <label>Olives&nbsp;&nbsp;
                        <input type='checkbox' name='olives' value={values.olives} onChange={onChange}/>
                    </label>
                    <label>Chives&nbsp;&nbsp;
                        <input type='checkbox' name='chives' value={values.chives} onChange={onChange}/>
                    </label>
                </div>

                <div className='orderform-container' id='orderform-special'>
                    <label>Special Instructions:&nbsp;&nbsp;&nbsp;
                        <textarea 
                            id='special-text'
                            type='text'
                            name='aaa_specialInstructions'
                            placeholder='Leave blank if no additional instructions...'
                            value={values.aaa_specialInstructions}
                            onChange={onChange}
                        />
                    </label>
                </div>

                <div className='orderform-container' id='orderform-submit'>
                    <input id='order-button' type='submit' vale='Place Order' disabled={disabled}/><br/>
                    <p>{disabled ? "Please fill out all required fields" : ""}</p>
                </div>
            </form>
        </div>
    )
}