import { useState } from "react"
import reactLogo from './assets/react.svg'
import notificationsData from "./notifications"
import Notification from "./Notification"
import "./App.css"

function App() {
  const [notifications, setNotifications] = useState(notificationsData)

  const removeNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const clearAllNotifications = () => {
    setNotifications([])
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Notifications ({notifications.length})</h1>
      <div className="notification-container">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <Notification key={notification.id} onClear={() => removeNotification(notification.id)}>
              <strong>{notification.name}:</strong> {notification.message}
            </Notification>
          ))
        ) : (
          <p>No notifications</p>
        )}
      </div>
      {notifications.length > 0 && (
        <button className="clear-all-btn" onClick={clearAllNotifications}>Clear All</button>
      )}
    </div>
  )
}

export default App