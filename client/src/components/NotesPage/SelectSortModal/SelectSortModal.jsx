import { useState } from 'react';
import useNotesStore from '../../../store/useNotesStore';
import Modal from '../../Shared/UI/Modal/Modal';
import CloseModalBtn from '../../Shared/UI/CloseModalBtn/CloseModalBtn';
import ConfirmModalBtn from '../../Shared/UI/ConfirmModalBtn/ConfirmModalBtn';
import ModalFooter from '../../Shared/UI/ModalFooter/ModalFooter';
import ModalHeader from '../../Shared/UI/ModalHeader/ModalHeader';
import styles from './SelectSortModal.module.scss';

const SelectSortModal = ({ onClose }) => {

  return (
    <Modal onClose={onClose}>
      <div className={styles.modalContent}>
        <ModalHeader title={'Add note'} onClose={onClose}/>
        <div className={styles.modalMain}>

        </div>
        <ModalFooter>
          <CloseModalBtn onClick={onClose} type='button'>Cancel</CloseModalBtn>
          <ConfirmModalBtn onClick={addNoteHandler} type='submit'>Add</ConfirmModalBtn>
        </ModalFooter>
      </div>
    </Modal>
  )
}
export default SelectSortModal;