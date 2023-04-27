// Write your code here

import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)
  return <div className="notification-container">{children}</div>
}

export default Notification
