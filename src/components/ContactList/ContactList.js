import React, { Fragment } from 'react';

const ContactList = ({ renderItems, totalItems, handler }) => (
  <Fragment>
    <ul>
      {renderItems.map(item => (<li key={item.id}><span>{item.name}: {item.number}</span>
        <button title='delete'
          onClick={() => handler(item.id)}
        >x</button>
      </li>))}
    </ul>
    <p>Total contacts: {totalItems.length}</p>
  </Fragment>
);

export default ContactList;