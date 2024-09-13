// Styles
import IconComponent from '@/ui/components/icon/icon.component';
import Styles from './image-modal.module.css';

// Hooks
import Image from 'next/image'
import {useState} from 'react'

// Components
import { ArrowRightIcon, ArrowLeftIcon, CloseIcon } from '@/assets/icons';

const ImageModal = ({images, imageNumber, closeModal}) => {
  const [imageIndex, setImageIndex] = useState(imageNumber);
  const [touchPosition, setTouchPosition] = useState(null);

  function subtractImageIndex() {
    if(imageIndex === 0 ) {
      setImageIndex(images.length -1)
    } else {
      setImageIndex(imageIndex - 1)
    }
  }
  function addImageIndex() {
    if((imageIndex + 1) === images.length ) {
      setImageIndex(0)
    } else {
      setImageIndex(imageIndex + 1)
    }
  }

  function handleTouchStart(e) {
    const touchDown = e.touches[0].clientX
    console.log("touchDown", touchDown)
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition

    if(touchDown === null) {
        return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
        addImageIndex();
    }

    if (diff < -5) {
        subtractImageIndex();
    }

    setTouchPosition(null)
  }


  return (
    <div className={Styles.imageModal}>

      <button id={Styles.closeBtn} className={Styles.modalBtn} onClick={closeModal}>
        <IconComponent > <CloseIcon color="#ffff" /> </IconComponent>
      </button>

      {images.map((image, i) => {

        if(i === imageIndex){
          return (
          <div
            className={Styles.modalWrapper}
            key={i}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >

            <button id={Styles.btnLeft} className={Styles.modalBtn} onClick={subtractImageIndex} >
              <IconComponent>
                <ArrowLeftIcon color="#fff" />
              </IconComponent>
            </button>
            <button id={Styles.btnRight} className={Styles.modalBtn} onClick={addImageIndex} >
              <IconComponent>
                <ArrowRightIcon color="#fff" />
              </IconComponent>
            </button>

            <Image
              className={Styles.modalImage}
              src={image.imgUrl}
              alt="traingsveld az"
              width={500}
              height={500}
              />
          </div>
          )
        }
      })}


    </div>
  )
}

export default ImageModal;
