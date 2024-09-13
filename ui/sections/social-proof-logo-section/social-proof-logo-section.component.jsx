import Styles from './social-proof-logo-section.module.css';

const SocialProofLogoSection = ({children}) => {
  const title = "Wij Beheren de velden van onder andere"
  return (
    <section className='section' id="social-proof-logo-section">
      <h3 className={Styles.socialProofTitle}>{title}</h3>
      {children}
    </section>
  )
}

export default SocialProofLogoSection;
