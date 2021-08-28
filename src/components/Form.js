import React, {useState} from "react";
import Signupform from './SignupForm';
import SignupformSuccess from '../components/SignupFormSuccess';
import './SignUp.css'

const Form = () => {

    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true);
    };
    return(  <div>
            { !formIsSubmitted ? 
            ( <Signupform submitForm={submitForm} /> ) 
            : 
            ( <SignupformSuccess />)}
            
        </div>
    )
    
};

export default Form;