'use client'

// Styles
import Styles from './gallery.module.css';

// Hooks
import Image from 'next/image';
import {useState} from 'react'

// Components
import ImageModal from '@/ui/modals/image-modal/image-modal.component';

const Gallery = ({images}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false)



  function modalHandler(i) {
    setIsModalOpen(!isModalOpen);
    setImageIndex(i)
  }


  return (
    <section id="gallery-section" className={Styles.gallerySection}>

        <h3 className={Styles.title}>Ons werk</h3>

      <div className="wrapper">
        <div className={Styles.imageGrid}>
          {images.map((image, i) => {
            return (
              <button onClick={() => modalHandler(i)} key={i}>
                <figure className={Styles.gridFigure}  >
                  <Image
                      className={Styles.galleryImage}
                      id={Styles[`image-${i}`]}
                      src={image.imgUrl}
                      width={500}
                      height={500}
                      alt={image.altText}
                      />
                </figure>
              </button>
            )
          })}
        </div>
      </div>
      {isModalOpen && <ImageModal closeModal={modalHandler} imageNumber={imageIndex} images={images} />}

    </section>
  )
}

export default Gallery;
