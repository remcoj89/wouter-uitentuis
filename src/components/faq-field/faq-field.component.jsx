import './faq-field.styles.scss';
import { useState } from 'react';

const FaqField = ({prop}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {question, answer} = prop

  const toggleIsOpen = () => {
    return setIsOpen(!isOpen)
  }

  return (
    <div className="accordion-item">
      <button className='faq-button' id="accordion-button" aria-expanded={isOpen}><span className="accordion-title" onClick={toggleIsOpen}>{question}</span><span className="icon" aria-hidden="true"></span></button>
      <div className="accordion-content">
        <p>{answer}</p>
      </div>
    </div>
  )
};

export default FaqField;
