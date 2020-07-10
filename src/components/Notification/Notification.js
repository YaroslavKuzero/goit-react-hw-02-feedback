import React, { Fragment } from 'react';
import styles from './Notification.module.css';

const Notification = ({ title }) => (
  <Fragment>
    <p className={styles.notification}>{title}</p>
  </Fragment>
)

export default Notification;