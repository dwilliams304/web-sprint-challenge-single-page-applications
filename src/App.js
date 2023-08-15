import React, {useState, useEffect} from "react";
import Home from "./Components/Home";
import OrderForm from "./Components/OrderForm";
import NavBar from "./Components/Navbar";
import Confirmation from "./Components/Confirmation";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import * as yup from 'yup';
import formSchema from "./validation/formSchema";
import { BASE_URL } from "./Constants/Constants";


const initialFormValues = {
  a_customerName: '',
  aa_pizzaSize: '',
  aaa_specialInstructions: '',
  sausage: false,
  pepperoni: false,
  bacon: false,
  jalapenos: false,
  chicken: false,
  mushrooms: false,
  dicedtomatoes: false,
  olives: false,
  chives: false
}

const initialDisabled = true;

const orderConfirmation = {
  id: '',
  createdAt: ''
}


const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [confirmation, setConfirmation] = useState(orderConfirmation);


  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = () => {
    axios.post(`${BASE_URL}`, formValues)
      .then(res => {
        setConfirmation(res.data);
      })
      .catch(err => console.log(err))
  }

  const validate = (name, value) => {
    if(name){
      yup.reach(formSchema, name)
        .validate(value)
        .then(() => setFormErrors({...formErrors, [name]: ''}))
        .catch(err => {
          setFormErrors({...formErrors, [name]: err.errors[0]})
        })
    }
  }


  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues])

  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='pizza' element={
        <OrderForm 
          update={handleChange} 
          submit={handleSubmit} 
          values={formValues}
          errors={formErrors}
          disabled={disabled}
        
        />} />
        <Route path='confirmation' element={<Confirmation created={confirmation.createdAt} id={confirmation.id} name={formValues.a_customerName}/>}/>
      </Routes>

    </>
  );
};
export default App;
