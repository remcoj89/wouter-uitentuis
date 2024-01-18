import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';


import './contact-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, subject, message } = formFields;


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='contact-form-container'>
      <h2>Neem vrijblijvend contact met ons op</h2>
      <form>
        <FormInput
          label='Naam'
          type='text'
          required
          onChange={handleChange}
          name='naam'
          value={displayName}
        />
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Onderwerp'
          type='text'
          required
          onChange={handleChange}
          name='subject'
          value={subject}
        />
        <FormInput
          label='Bericht'
          type='text'
          required
          onChange={handleChange}
          name='message'
          value={message}
        />
        <Button type='submit' buttonType={'submitButton'}>Verzenden</Button>
      </form>
    </div>
  );
};

export default ContactForm;
