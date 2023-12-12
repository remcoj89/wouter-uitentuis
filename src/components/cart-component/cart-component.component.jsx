import './cart-component.styles.scss';
import { useState } from 'react';


const CartComponent = ({ cart }) => {
const { iconPath, title, paragraph1, paragraph2 } = cart;

const [readMore, setReadMore] = useState(false)

const toggleReadMore = () => {
  return setReadMore(!readMore);
}


  return (
    <div className={`card ${readMore ? 'open' : ''}`}>
      <img src={require(`../../assets/icons/${iconPath}.svg`)} alt={`Wouter Uitentuis ${title}`} />
      <h2>{title}</h2>
      <p>{paragraph1}</p>
      {readMore && <p className='paragraph-2'>{paragraph2}</p>}
      <span className='read-more-btn' onClick={toggleReadMore}>{readMore ? 'Lees minder' : 'Lees meer...'}</span>
    </div>
  );
};

export default CartComponent;
