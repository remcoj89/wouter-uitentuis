'use client'

// Styles
import Styles from './gallery.module.css';

// Hooks
import Image from 'next/image';
import {useState} from 'react'



const Gallery = () => {
  const [carouselAngle, setCarouselAngle] = useState(0)

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
    {imgUrl:'/assets/images/field-management/hero_image-1.png', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/hero_image-1.png', imageTitle: "titel", altText: "image description"},
    {imgUrl:'/assets/images/field-management/hero_image-1.png', imageTitle: "titel", altText: "image description"},
  ]

  const gallerySpin = (sign) => {
    const newAngle = sign ? carouselAngle - 45 : carouselAngle + 45;
    setCarouselAngle(newAngle)
  }


  return (
    <section id="gallery-section" className={Styles.gallerySection}>

        <h4 className={Styles.subtitle}>Gallerij</h4>
        <h3 className={Styles.title}>Een impressie van ons werk</h3>

      <div className="wrapper">
        <div className={Styles.imageGrid}>
        {/* <div className={Styles.imageGri}> */}
          {images.map((image, i) => {
            return (
                <Image
                    className={Styles.galleryImage}
                    id={Styles[`image-${i}`]}
                    src={image.imgUrl}
                    width={500}
                    height={500}
                    alt={image.altText}
                    key={i}
                     />

            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Gallery;
