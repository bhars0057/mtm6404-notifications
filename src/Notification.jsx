const Notification = ({ children, onClear }) => {
  return (
    <div className="notification">
      <div>{children}</div>
      <button className="clear-btn" onClick={onClear}>
        Clear
      </button>
    </div>
  )
}

export default Notification;