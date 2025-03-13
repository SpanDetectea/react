import './message.css'

const Message = (props) => {
  return (
    <div className="message">
      <p className="message__text">{props.text}</p>
    </div>
  );
};

export default Message;
