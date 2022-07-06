import Button from 'components/Button';
import Input from 'components/Input';
import InputWrapper from 'components/Input/InputWrapper';
import ValidateMessage from 'components/Input/ValidateMessage';
import Modal from 'components/Modal';
import { generateId } from 'helpers';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Todo } from '../store';
import { handleAdd, handleUpdate } from '../store/actions';
import { SModalContent } from './styles';

interface Props {
  editingTodo?: Todo;
  isOpen: boolean;
  toggleModal: () => void;
}

export default function ItemModal(props: Props) {
  const { editingTodo, isOpen, toggleModal } = props;

  const isEditing = editingTodo ? true : false;

  const title = isEditing ? 'Edit The Task' : 'Add Task';

  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm();

  const onSubmit = (values: any) => {
    if (isEditing) {
      dispatch(handleUpdate({ ...editingTodo, ...values.todo }));
      toast.success('Task is added');
    } else {
      const todo: Todo = {
        active: true,
        completed: false,
        createdAt: new Date().toISOString(),
        id: generateId(),
        ...values.todo,
      };
      dispatch(handleAdd(todo));
      toast.success('Task is updated');
    }
    toggleModal();
    reset();
  };

  useEffect(() => {
    if (editingTodo && isOpen) {
      setValue('todo', editingTodo);
    }
  }, [editingTodo, setValue, isOpen]);

  return (
    <Modal {...{ title, isOpen, toggleModal }}>
      <SModalContent>
        <form className="modal__form">
          <InputWrapper label="Member">
            <Input
              {...register('todo.member', {
                required: 'This field is required',
              })}
            />
            <ValidateMessage {...{ errors, name: 'todo.member' }} />
          </InputWrapper>
          <InputWrapper label="Title">
            <Input
              {...register('todo.title', {
                required: 'This field is required',
              })}
            />
            <ValidateMessage {...{ errors, name: 'todo.title' }} />
          </InputWrapper>
          <InputWrapper label="Description">
            <Input
              {...register('todo.desc', {
                required: 'This field is required',
              })}
            />
            <ValidateMessage {...{ errors, name: 'todo.desc' }} />
          </InputWrapper>
        </form>
        <div className="modal__footer">
          <Button
            className="modal__footer__btn"
            themeColor="white"
            onClick={toggleModal}
          >
            Cancel
          </Button>
          <Button
            className="modal__footer__btn"
            themeColor="red"
            type="button"
            onClick={handleSubmit(onSubmit)}
          >
            Apply
          </Button>
        </div>
      </SModalContent>
    </Modal>
  );
}

ItemModal.displayName = ItemModal;
