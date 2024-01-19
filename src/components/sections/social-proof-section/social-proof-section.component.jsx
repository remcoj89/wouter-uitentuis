import './social-proof-section.styles.scss';

const SocialProofSection = ({yearsActive, socialProof}) => {
  if(!socialProof) {
    return null;
  }

  const hasSocialProofContent = Object.values(socialProof).some(item => item.description);

  return (
    <section className={`social-proof-container ${hasSocialProofContent ? 'has-social-proof-content' : ''}`}>
      {
        Object.values(socialProof).map((item, i) => {
          const {logo, title, description} = item
          return (
          <div className="social-proof-cart" key={i}>
            { logo ?  (<img className='social-proof-logo' src={require(`../../../assets/images/club-logo's/${logo}.png`)} alt={`Wouter Uitentuis fiels manager bij ${logo}`} key={i}/>) :
            <div className='social-proof-content'>
              <h2 className='social-proof-title'>{title || yearsActive }</h2>
              <p className='social-proof-description'>{description}</p>
            </div>
          }
          </div>
          )
        })
      }
  </section>
  );
}

export default SocialProofSection;
