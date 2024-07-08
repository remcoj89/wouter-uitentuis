'use client'
// Styles
import Styles from './contact-form.module.css';

// Components
import Button from '../button/button.component';
import InputField from '../form-input/form-input.component';

// Hooks
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import MessageModal from '@/ui/modals/message-modal/message-modal.component';

const defaultFormFields = {
  user_name: "",
  user_email: "",
  message: "",
}

const defaultMessage = {
  title: 'succes',
  message: 'hartelijk dank voor uw bericht'
}



const ContactForm = () => {
  const [formFields , setFormFields] = useState(defaultFormFields);
  const [pending, setPending] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(defaultMessage);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {user_name, user_email, message} = formFields;
  const form = useRef();

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handelChange = (event) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value})
};



  const handleSubmit =  async(event) => {
    event.preventDefault();
    setPending(true)
    try {
      await emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY
      });
      setSubmitMessage({
        title: `Dank je wel ${user_name}`,
        message: `We hebben je bericht ontvangen en nemen binnen 24 uur contact met je op via ${user_email}.`
      })

    } catch (error) {
      console.log(error)
      setSubmitMessage({
        title: `Oepsss`,
        message: `Sorry ${user_name} er is iets mis gegaan met het verzenden van het bericht. Probeer het later nog eens of neem contact met ons op via: info@wouteruitentuis.nl`
      })
    } finally {
      setPending(false);
      setIsModalOpen(true);
      resetFormFields();
    }
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className={Styles.contactForm}>
      <InputField
        label="Naam"
        inputOptions={{
          name:"user_name",
          value: user_name,
          placeholder: "Naam",
          type:"text",
          onChange: handelChange,
          required: true
        }}
        />
      <InputField
        label="Email"
        inputOptions={{
          name:"user_email",
          value: user_email,
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
      <span>Uw gegevens zullen <strong>nooit</strong> met derden worden gedeeld</span>
      {isModalOpen && (
        <MessageModal modalOpen={setIsModalOpen}>
          <h3>{submitMessage.title}</h3>
          <p>{submitMessage.message}</p>
        </MessageModal>
      )
      }

    </form>
  )
}

export default ContactForm;
