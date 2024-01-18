import './cart-section.styles.scss';
import CartComponent from '../../cart-component/cart-component.component'


const CartSection = ({specialization}) => {
  if(!specialization) {
    return;
  }

  return (
    <section className="cart-container" id="cart-section">
    {
      Object.values(specialization).map((specialty) => {
        return <CartComponent cart={specialty} key={specialty.title}/>
      })
    }

    </section>
  )
};

export default CartSection;
