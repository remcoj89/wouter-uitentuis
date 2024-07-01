'use client'
// Styles
import Styles from './contact-form.module.css';

// Components
import Button from '../button/button.component';
import InputField from '../form-input/form-input.component';

// Hooks
import { useState } from 'react';
import { useFormStatus } from "react-dom";

const defaultFormFields = {
  name: "",
  email: "",
  message: "",
}



const ContactForm = () => {
  const [formFields , setFormFields] = useState(defaultFormFields);
  const {name, email, message} = formFields

  const { pending } = useFormStatus();

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handelChange = (event) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value})
};

  const handleSubmit =  (event) => {
    event.preventDefault();

    resetFormFields();
  }


  return (
    <form onSubmit={handleSubmit} className={Styles.contactForm}>
      <InputField
        label="Naam"
        inputOptions={{
          name:"name",
          value: name,
          placeholder: "Naam",
          type:"text",
          onChange: handelChange,
          required: true
        }}
        />
      <InputField
        label="Email"
        inputOptions={{
          name:"email",
          value: email,
          placeholder: "Email",
          type:"email",
          onChange: handelChange,
          required: true
        }}
      />
      <InputField
        label="Bericht"
        inputOptions={{
          name:"message",
          value: message,
          placeholder: "Uw vraag...",
          type:"textarea",
          onChange: handelChange,
          required: true
        }}
      />

      <Button buttonType="submit" buttonStyle='btnPrimary'>{pending ? "Wordt verzonden..." : "Verzenden"}</Button>
      <span>Uw gegevens zullen nooit worden gedeeld</span>
    </form>
  )
}

export default ContactForm;
