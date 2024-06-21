// Styling
import Styles from './card.module.css';

const CardComponent = ({children, cardStyle}) => {

  return (
    <div className={`${Styles.card} ${Styles[cardStyle] || ''}`}>
      {children}
    </div>
  )
}


export default CardComponent;
