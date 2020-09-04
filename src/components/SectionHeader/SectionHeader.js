import React from 'react';
import PropTypes from 'prop-types';

import { section, header } from './SectionHeader.module.css';

const SectionHeader = ({ title, children }) => (
  <div className={section}>
    <h2 className={header}>{title}</h2>
    {children}
  </div>
)

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default SectionHeader;