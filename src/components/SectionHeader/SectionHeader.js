import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ title, children }) => (
  <div className={styles.section}>
    <h2 className={styles.header}>{title}</h2>
    {children}
  </div>
)

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default SectionHeader;