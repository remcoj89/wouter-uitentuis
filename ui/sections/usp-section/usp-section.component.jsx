// Styling
import Styles from './usp-section.module.css';
import Image from 'next/image';

// Components
import CardComponent from '@/ui/components/card/card.component';
import Button from '@/ui/components/button/button.component';
import { ArrowRightIcon } from '@/assets/icons';

const UspSection = () => {

  const bennefits = [
    {
      icon: '/assets/images/field-management/icon-grass.svg',
      title: "Gras Specialist",
      description: "Lorem ipsum dolor sit amet consectetur. Consequat nec bibendum amet platea sapien amet sollicitudin feugiat. Mauris ultricies quis tristique sed ornare neque eget tristique."
    },
    {
      icon: '/assets/images/field-management/icon-water.svg',
      title: "Water beheer",
      description: "Lorem ipsum dolor sit amet consectetur. Consequat nec bibendum amet platea sapien amet sollicitudin feugiat. Mauris ultricies quis tristique sed ornare neque eget tristique."
    },
    {
      icon: '/assets/images/field-management/icon-seed.svg',
      title: "Bemesten",
      description: "Lorem ipsum dolor sit amet consectetur. Consequat nec bibendum amet platea sapien amet sollicitudin feugiat. Mauris ultricies quis tristique sed ornare neque eget tristique."
    },
  ]
  return (
    <section id="usp-section">
      <div className={`wrapper ${Styles.uspSection}`}>
        {bennefits.map((benefit, i) => {
          return (
            <CardComponent cardStyle={"uspCard"}  key={i}>
              <Image className={Styles.cardIcon} src={benefit.icon} alt={`icoon ${benefit.title}`} height={100} width={100} />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>

              <Button buttonStyle="btnCard">Lees Meer <div className={Styles.btnIcon}><ArrowRightIcon/></div></Button>
            </CardComponent>
          )
        })}
      </div>
    </section>
  )
}

export default UspSection;
