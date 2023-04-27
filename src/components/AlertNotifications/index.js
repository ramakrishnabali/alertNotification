// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import {GrFormClose} from 'react-icons/gr'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="app-container">
    <div className="card-container">
      <h1 className="heading">Alert Notifications</h1>
      <Notification>
        <AiFillCheckCircle className="success-icon" />
        <div className="description-container">
          <h1 className="success">Success</h1>
          <p className="description">
            "You can access all the files in the folder{' '}
          </p>
        </div>
        <GrFormClose className="close-icon" />
      </Notification>

      <Notification>
        <RiErrorWarningFill className="error-icon" />
        <div className="description-container">
          <h1 className="error">Error</h1>
          <p className="description">
            Sorry, you are not authorized to have access to delete the file{' '}
          </p>
        </div>
        <GrFormClose className="close-icon" />
      </Notification>

      <Notification>
        <MdWarning className="warning-icon" />
        <div className="description-container">
          <h1 className="warning">Warning</h1>
          <p className="description">
            Viewers of this file can see comments and suggestions{' '}
          </p>
        </div>
        <GrFormClose className="close-icon" />
      </Notification>

      <Notification>
        <MdInfo className="info-icon" />
        <div className="description-container">
          <h1 className="info">Info</h1>
          <p className="description">
            Anyone on the internet can view these files
          </p>
        </div>
        <GrFormClose className="close-icon" />
      </Notification>
    </div>
  </div>
)

export default AlertNotifications
