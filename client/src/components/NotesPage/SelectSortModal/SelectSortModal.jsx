import Modal from '../../Shared/UI/Modal/Modal';
import ModalHeader from '../../Shared/UI/ModalHeader/ModalHeader';
import styles from './SelectSortModal.module.scss';
import { NOTES_SORT_METHODS } from '../../../constants/notesSortMethods';
import CheckmarkIcon from '/src/assets/icons/checkmark.svg?react';

const SelectSortModal = ({ onClose, selectedSort, onSelectSort }) => {

  const handleSelectSort = (method) => {
    selectedSort !== method && onSelectSort(method);
  }

  const sortMethodsList = Object.values(NOTES_SORT_METHODS);
  
  return (
    <Modal onClose={onClose}>
      <div className={styles.modalContent}>
        <ModalHeader title={'Sort by'} onClose={onClose}/>
        <div className={styles.modalMain}>
          <div className={styles.sortMethods}>
            {sortMethodsList.map(method => (
              <div 
                key={method.value}
                className={`${styles.sortMethod} ${selectedSort === method.value ? styles.active : ''}`}
                onClick={() => handleSelectSort(method.value)}
              >
                <div className={styles.checkmarkBox}>
                  {selectedSort === method.value && (
                    <CheckmarkIcon
                      style={{
                        width: '35px',
                        height: '35px',
                        fill: 'black'
                      }}
                    />
                  )}
                </div>
                <div className={styles.sortMethodLabel}>{method.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  )
}
export default SelectSortModal;