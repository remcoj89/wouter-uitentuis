// Styling
import Styles from './card.module.css';

const CardComponent = ({children, cardStyle, backgroundImgUrl}) => {

  return (
    <div className={`${Styles.card} ${Styles[cardStyle] || ''}`} style={{backgroundImage: `url(${backgroundImgUrl})`}}>
      {children}
    </div>
  )
}


export default CardComponent;
