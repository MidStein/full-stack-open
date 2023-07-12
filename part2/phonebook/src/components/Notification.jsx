const Notification = ({ message, successful }) => {
  const messageClassName = `message ${successful ? "successful" : "unsuccessful"}`;
  return message ? (
    <div className={messageClassName}>
      {message}
    </div>
  ) : null;
}

export default Notification;
