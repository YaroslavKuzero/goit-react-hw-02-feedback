import React from 'react';
import PropTypes from 'prop-types';

import { notification } from './Notification.module.css';

const Notification = ({ title }) => <p className={notification}>{title}</p>;

Notification.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Notification;