import './cart-component.styles.scss';
const CartComponent = ({ cart }) => {
const { iconPath, title, paragraph1, paragraph2 } = cart;

  return (
    <div className="card">
      <img src={require(`../../assets/icons/${iconPath}.svg`)} alt={`Wouter Uitentuis ${title}`} />
      <h2>{title}</h2>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </div>
  );
};

export default CartComponent;
