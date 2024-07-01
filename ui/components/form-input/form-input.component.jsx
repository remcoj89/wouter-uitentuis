// Styles
import Styles from './form-input.module.css';

const InputField = ({label, inputOptions}) => {

  return (
    <div className={Styles.formField}>
      <label className={Styles.label} htmlFor={name}>{label}</label>

      {inputOptions.type !== 'textarea' ?
      < input
        className={Styles.input}
        {...inputOptions}
      />
        :
      < textarea
        className={Styles.textArea}
        {...inputOptions}
        />
      }

    </div>

  )
}

export default InputField;
