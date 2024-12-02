
import Styles from './message-modale.module.css';
import { CloseIcon } from '@/assets/icons';

const MessageModal = ({children, modalOpen}) => {
  return (
    <div className={Styles.messageModal}>
        <div className={Styles.message}>
          <div className={Styles.buttonClose} onClick={() => modalOpen(false)}>
            <CloseIcon color = '#ffff' />
          </div>
          {children}
        </div>
    </div>
  )
}

export default MessageModal;
