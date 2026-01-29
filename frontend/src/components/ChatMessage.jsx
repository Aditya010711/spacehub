const ChatMessage = ({ message, sender }) => {
  return (
    <div className={`chat-message ${sender}`}>
      <span>
        {typeof message === "object" ? message.reply : message}
      </span>
    </div>
  );
};

export default ChatMessage;
