import './image-section.styles.scss';
import {ReactComponent as ArrowLeft}  from '../../../assets/icons/iconamoon_arrow-left-2.svg';
import {ReactComponent as ArrowRight}  from '../../../assets/icons/iconamoon_arrow-right-2.svg';
import { useState } from 'react';


const ImageSection = ({images}) => {
  const [imagePosition, setImagePosition] = useState(0)
  if(!images) {
    return;
  }

  const imagePositionHandler = (direction) => () => {
    if ((direction === "left" && imagePosition > 0) || (direction === "right" && imagePosition < images.length - 1)) {
      setImagePosition((prevPosition) => prevPosition + (direction === "left" ? -1 : 1));
    }
  }
  const image = images[imagePosition]

  return (
    <section className='image-container'>
      <img className='image' src={require(`../../../assets/images/${image}.jpg`)} alt="" />
      <div className="arrow-container">
        <ArrowLeft  className='arrow' onClick={imagePositionHandler("left")} />
        <ArrowRight className='arrow' onClick={imagePositionHandler("right")}/>
      </div>

    </section>
  )
};

export default ImageSection;
