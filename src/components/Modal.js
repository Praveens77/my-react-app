function Modal(props) {
  return (
    <div className='modal'>
      <p>{props.text}</p>
      <button className='btn btn--alt' onClick={props.onClose}>
        No. Wait
      </button>
      <button className='btn' onClick={props.onClose}>
        Yes. Do It
      </button>
    </div>
  );
}

export default Modal;
