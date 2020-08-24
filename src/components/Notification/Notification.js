import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ title }) => (
  <Fragment>
    <p className={styles.notification}>{title}</p>
  </Fragment>
)

Notification.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Notification;