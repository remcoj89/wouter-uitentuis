import './social-proof-section.styles.scss';

const SocialProofSection = ({yearsActive, socialProof}) => {
  if(!socialProof) {
    return null;
  }

  return (
    <section className="social-proof-container">
      {
        Object.values(socialProof).map((item, i) => {
          const {logo, title, description} = item
          return (
          <div className="social-proof-cart" key={i}>
            { logo ?  (<img src={require(`../../../assets/images/club-logo's/${logo}.png`)} alt={`Wouter Uitentuis fiels manager bij ${logo}`} key={i}/>) :
            <>
              <h2 className='social-proof-title'>{title || yearsActive}</h2>
              <p className='social-proof-description'>{description}</p>
            </>
          }
          </div>
          )
        })
      }
  </section>
  );
}

export default SocialProofSection;
