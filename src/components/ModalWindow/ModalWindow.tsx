import ReactDOM from 'react-dom';

import './styles/modal-window.css';
import './styles/modal-window__container.css';
import './styles/modal-window__message.css';
import './styles/modal-window__button.css';
import './styles/modal-window__button_type_submit.css';
import './styles/modal-window__button_type_cancel.css';

interface IModalWindow {
  message: string;
  onSubmit: () => void;
  onCancel?: () => void;
}

const ModalWindow = ({ message, onSubmit, onCancel = () => { } }: IModalWindow): JSX.Element => {
  return (
    ReactDOM.createPortal(
      <div className='modal-window'>
        <div className='modal-window__container'>
          <p className='modal-window__message'>{ message }</p>
          <button
            className='modal-window__button modal-window__button_type_submit'
            type='button'
            onClick={ onSubmit }
          >
            Да
          </button>
          <button
            className='modal-window__button modal-window__button_type_cancel'
            type='button'
            autoFocus={ true }
            onClick={ onCancel }
          >
            Нет
          </button>
        </div>
      </div>,
      document.querySelector('.app') as HTMLDivElement
    )
  );
}

export default ModalWindow;
