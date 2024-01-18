import './desktop-footer-section.styles.scss';

const FooterSection = () => {

  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-content">
        <div className='footer-left'>
          <h2 className='footer-logo'>W.Uitentuis</h2>
          <p className='copy-right'><span> &copy;</span>2007 - {year} - Copy right - W.Uitentuis</p>
        </div>
        <ul className='footer-contact'>
          <li>info@wouteruitentuis.nl</li>
          <li>06-30272667</li>
          <li>Westeinde 29</li>
          <li>1636VB Schermerhorn</li>
          <li>KVK: 12345678</li>
        </ul>
      </div>
    </div>
  )
}

export default FooterSection;
