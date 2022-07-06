import Button from 'components/Button';
import Modal from 'components/Modal';
import { Todo } from '../store';

interface Props {
  editingTodo?: Todo;
  isOpen: boolean;
  toggleModal: () => void;
}

export default function ItemModal(props: Props) {
  const { editingTodo, isOpen, toggleModal } = props;

  const title = editingTodo ? 'Edit The Task' : 'Add Task';

  return (
    <Modal {...{ title, isOpen, toggleModal }}>
      <div className="modal__footer">
        <Button themeColor="white">Cancel</Button>
        <Button themeColor="red">Apply</Button>
      </div>
    </Modal>
  );
}

ItemModal.displayName = ItemModal;
