import * as yup from  'yup';


const formSchema = yup.object().shape({
    a_customerName: yup.string().trim()
        .required('name is required to place the order')
        .min(2, 'name must be at least 2 characters'),

    aa_pizzaSize: yup.string().trim()
        .required('pizza size is required'),
    
    aaa_specialInstructions: yup.string(),

    sausage: yup.boolean(),
    pepperoni: yup.boolean(),
    bacon: yup.boolean(),
    jalapenos: yup.boolean(),
    chicken: yup.boolean(),
    mushrooms: yup.boolean(),
    dicedtomatoes: yup.boolean(),
    olives: yup.boolean(),
    chives: yup.boolean()


})

export default formSchema;