import Styles from './article-section.module.css';
import Image from 'next/image'

const ArticleSection = ({articleContent}) => {
  const {articleQuote, articleDescription, articleImage1, articleImage2} = articleContent

  console.log(articleContent)
  return (
    <section id="article-section">
      <article className={`wrapper ${Styles.articleGrid}`}>
        <div className={Styles.articleGridItem1}>
          <Image
            className={Styles.articleImage}
            src={articleImage1.imageUrl}
            alt={articleImage1.altText}
            height={500}
            width={500} />
        </div>

        <div className={Styles.articleGridItem2}>
          <div className={Styles.paragraphWrapper}>
            <q className={Styles.articleQuote}>{articleQuote}</q>
            <p>{articleDescription.paragraph1}</p>
          </div>
          <div className={Styles.paragraphWrapper}>
            <h3>{articleDescription.title1}</h3>
            <p>{articleDescription.paragraph2}</p>
          </div>
        </div>

        <div className={Styles.articleGridItem3}>
          <div className={Styles.paragraphWrapper}>
            <h3>{articleDescription.title2}</h3>
            <p>{articleDescription.paragraph3}</p>
          </div>
          <div className={Styles.paragraphWrapper}>
            <h3>{articleDescription.title3}</h3>
            <p>{articleDescription.paragraph4}</p>
          </div>
        </div>

        <div className={Styles.articleGridItem4}>
          <Image
            className={Styles.articleImage}
            src={articleImage2.imageUrl}
            alt={articleImage2.altText}
            height={500}
            width={500} />
        </div>
      </article>
    </section>

  )
}

export default ArticleSection;
