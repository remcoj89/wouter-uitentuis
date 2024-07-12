'use client'

// Styles
import Styles from './gallery.module.css';

// Hooks
import Image from 'next/image';
import {useState} from 'react'

// Components
import ImageModal from '@/ui/modals/image-modal/image-modal.component';

const Gallery = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const images = [
    {imgUrl:'/assets/images/field-management/wouter-met-gras.jpg', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/az-trainings-veld-1.jpg', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/az-trainings-veld-2.jpg', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/gezaaid-veld.jpg', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/green-grass-white-clouds.png', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/kolping-boys-trakker.jpg', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/kolping-boys.jpg', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/meten.jpg', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/prut.jpg', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/renovatie-trainings-veld-kolping-boys.jpg', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/renovatie-veld.jpg', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/team-wouter.jpg', imageTitle: "titel", altText: "image description"},
  ]

  function modalHandler(i) {
    setIsModalOpen(!isModalOpen);
    setImageIndex(i)
  }


  return (
    <section id="gallery-section" className={Styles.gallerySection}>

        <h4 className={Styles.subtitle}>Gallerij</h4>
        <h3 className={Styles.title}>Een impressie van ons werk</h3>

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
