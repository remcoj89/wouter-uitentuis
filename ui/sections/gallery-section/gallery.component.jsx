'use client'

// Styles
import Styles from './gallery.module.css';

// Hooks
import Image from 'next/image';


const Gallery = () => {

  const images = [
    {imgUrl:'/assets/images/field-management/hero_image-1.png', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/hero_image-1.png', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/hero_image-1.png', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/hero_image-1.png', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/hero_image-1.png', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/hero_image-1.png', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/hero_image-1.png', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/hero_image-1.png', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/hero_image-1.png', imageTitle: "titel", altText: "image description"},
  ]


  return (
    <section id="gallery-section" className={Styles.gallerySection}>

        <h4 className={Styles.subtitle}>Gallerij</h4>
        <h3 className={Styles.title}>Een impressie van ons werk</h3>

      <div className="wrapper">
        <div className={Styles.imageGrid}>
          {images.map(image => {
            return (
            <Image
              className={Styles.galleryImage}
              src={image.imgUrl}
              width={500}
              height={500}
              alt={image.altText}
              key={image.title} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Gallery;
