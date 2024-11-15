'use client'
// Styling
import Styles from './usp-section.module.css';
// Hooks

import Image from 'next/image';

// Components
import CardComponent from '@/ui/components/card/card.component';
import IconComponent from '@/ui/components/icon/icon.component';

const UspSection = ({bennefits}) => {

  return (
    <section id="usp-section">
      <div className={`wrapper ${Styles.uspSection}`}>
        {bennefits.map((benefit, i) => {
          return (
            <div key={i}>
              <CardComponent cardStyle={"uspCard"}  >
                <IconComponent iconStyle="cardIcon">
                  <Image src={benefit.iconUrl} alt={`icoon ${benefit.title}`} height={50} width={50} />
                </IconComponent>
                <div className={Styles.uspContent}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </CardComponent>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default UspSection;
