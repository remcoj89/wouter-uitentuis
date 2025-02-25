// Styles
import Styles from './social-proof.module.css';

const SocialProof = ({children, socialProofTitle}) => {

  return (
    <section id="social-proof-section" className={Styles.socialProofSection}>
      <h3 className={Styles.socialProofTitle}>{socialProofTitle}</h3>
      <div className={`wrapper ${Styles.socialProofWrapper}`}>
        {children}
      </div>
    </section>
  )
}

export default SocialProof;
