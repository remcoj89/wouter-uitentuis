import './mobile-footer-section.styles.scss';

const MobileFooterSection = () => {

  const year = new Date().getFullYear();

  return (
    <div className="mobile-footer">
      <h2 className='mobile-footer-logo'>W.Uitentuis</h2>
      <ul className='mobile-footer-contact'>
        <li>info@wouteruitentuis.nl</li>
        <li>06-30272667</li>
        <li>Westeinde 29</li>
        <li>1636VB Schermerhorn</li>
        <li>KVK: 12345678</li>
      </ul>
      <p className='copy-right'><span> &copy;</span>2007 - {year} - Copy right - W.Uitentuis</p>
    </div>
  )
}

export default MobileFooterSection;
