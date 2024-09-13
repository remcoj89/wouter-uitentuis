'use client'
import CardComponent from '../card/card.component';
import Styles from './horizontal-logo-slider.module.css';
import Image from 'next/image';
import React, {useEffect} from "react";


const HorizontalLogoSlider = ({logos}) => {


  // Add data attribute to the scroller element
  useEffect (() => {
    const scrollers = document.querySelectorAll(`.${Styles.scroller}`);

    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation()
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true)
      })
    }
  },[])

  // Copy the scrolling content
  useEffect(() => {
    const scrollerInner = document.querySelector(`.${Styles.scroller__inner}`);
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('array-hidden', true);
      scrollerInner.appendChild(duplicatedItem);
    })
  }, [])


  return (

    <div className={Styles.scroller} data-direction="left" data-speed="medium">
      <div className={Styles.scroller__inner} >
        {logos.map((logo, i) => {
          return <Image src={logo.imageUrl} width={300} height={100} alt={logo.altText} className={Styles.scrollerContent} key={i}/>
        })}
      </div>
    </div>

  )
}

export default HorizontalLogoSlider;
