import './cart-component.styles.scss';
import {ReactComponent}  from 'react'
const CartComponent = ({ cart }) => {
const { icon, title, paragraph1, paragraph2 } = cart;

const IconComponent =  require(`../../assets/icons/${icon}.svg`).ReactComponent
  return (
    <div className="card">
      {IconComponent && <IconComponent />}
      <h2>{title}</h2>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </div>
  );
};

export default CartComponent;
