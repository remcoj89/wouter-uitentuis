import Styles from './featured-content.module.css';

const FeaturedContentSection = ({featuredContent}) => {
  return (
    <section id="featured-content-section" className={Styles.featuredContent}>
      <div className={Styles.featuredContent__Wrapper}>
        <div>
        <h2 className={Styles.title}>{featuredContent.title}</h2>
        {featuredContent.subTitle ? <h3 className={Styles.title}>{featuredContent.subTitle}</h3> : ""}
        </div>
        <p className={Styles.paragraph}>{featuredContent.paragraph}</p>
      </div>
    </section>
  )
}

export default FeaturedContentSection;
