import Styles from './featured-content.module.css';

const FeaturedContentSection = ({featuredContent}) => {
  return (
    <section id="featured-content-section" className={Styles.featuredContent}>
      <div className={Styles.featuredContent__Wrapper}>
        <h2 className={Styles.title}>{featuredContent.title}</h2>
        <p className={Styles.paragraph}>{featuredContent.paragraph}</p>
      </div>
    </section>
  )
}

export default FeaturedContentSection;
