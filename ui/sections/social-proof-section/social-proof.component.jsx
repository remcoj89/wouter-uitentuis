// Styles
import Styles from './social-proof.module.css';

const SocialProof = ({children}) => {

  const title = "Wij Beheren de velden van onder andere"
  return (
    <section id="social-proof-section" className={Styles.socialProofSection}>
      <h3 className={Styles.socialProofTitle}>{title}</h3>
      <div className={`wrapper ${Styles.socialProofWrapper}`}>
        {children}
      </div>
    </section>
  )
}

export default SocialProof;
