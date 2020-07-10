import React from 'react';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ title, children }) => (
  <div className={styles.section}>
    <h2 className={styles.header}>{title}</h2>
    {children}
  </div>
)

export default SectionHeader;