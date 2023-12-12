import './cart-section.styles.scss';
import CartComponent from '../../cart-component/cart-component.component'


const CartSection = ({specialization}) => {
  if(!specialization) {
    return;
  }

  return (
    <div className="cart-container">
    {
      Object.values(specialization).map((specialty) => {
        return <CartComponent cart={specialty} key={specialty.title}/>
       })
    }

    </div>
  )
};

export default CartSection;
