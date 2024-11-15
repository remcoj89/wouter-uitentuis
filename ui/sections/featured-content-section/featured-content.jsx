import Styles from './featured-content.module.css';

const FeaturedContentSection = ({featuredContent}) => {
  return (
    <section id="featured-content-section" className={Styles.featuredContent}>
      <div className={Styles.featuredContent__Wrapper}>
        <h2>{featuredContent.title}</h2>
        <p>{featuredContent.paragraph}</p>
      </div>
    </section>
  )
}

export default FeaturedContentSection;
