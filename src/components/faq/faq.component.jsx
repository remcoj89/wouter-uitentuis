import './faq.styles.scss';
import FaqField from '../faq-field/faq-field.component';

const FaqComponent = ({faq}) => {
  if(!faq) {
    return;
  }

  return (
  <div className="container">
  <h2>Veel gestelde vragen</h2>
  <div className="accordion">
    { faq.map((question, i) => <FaqField prop={question} key={i}/>)}
  </div>
</div>
  )
};

export default FaqComponent;
