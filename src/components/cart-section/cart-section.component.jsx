import './cart-section.styles.scss';
import CartComponent from '../cart-component/cart-component.component'


const CartSection = () => {

  const cartData = [
    {
      title: 'Tuin Aanleg',
      icon: 'icon-shovel',
      paragraph1: 'Lorem ipsum dolor sit amet consectetur. Consequat nec bibendum amet platea sapien amet sollicitudin feugiat. Mauris ultricies quis tristique sed ornare neque eget tristique.',
      paragraph2: 'Lorem ipsum dolor sit amet consectetur. Consequat nec bibendum amet platea sapien amet sollicitudin feugiat. Mauris ultricies quis tristique sed ornare neque eget tristique.'
    },
    {
      title: 'Renovatie',
      icon: 'icon-shovel',
      paragraph1: 'Lorem ipsum dolor sit amet consectetur. Consequat nec bibendum amet platea sapien amet sollicitudin feugiat. Mauris ultricies quis tristique sed ornare neque eget tristique.',
      paragraph2: 'Lorem ipsum dolor sit amet consectetur. Consequat nec bibendum amet platea sapien amet sollicitudin feugiat. Mauris ultricies quis tristique sed ornare neque eget tristique.'
    },
    {
      title: 'Onderhoud',
      icon: 'icon-shovel',
      paragraph1: 'Lorem ipsum dolor sit amet consectetur. Consequat nec bibendum amet platea sapien amet sollicitudin feugiat. Mauris ultricies quis tristique sed ornare neque eget tristique.',
      paragraph2: 'Lorem ipsum dolor sit amet consectetur. Consequat nec bibendum amet platea sapien amet sollicitudin feugiat. Mauris ultricies quis tristique sed ornare neque eget tristique.'
    }
  ]


  return (
    <div className="cart-container">
     { cartData.map((cart) => {
      return <CartComponent cart={cart} key={cart.title}/>
     }
     )}
    </div>
  )
};

export default CartSection;
