import React from 'react';
import PropTypes from 'prop-types';
import css from './Contactlist.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  // додаемо перевірку наскільки в нас наповнений список контактів
  // та дадаємо клас emptyList якщо список путий то скрол приховуємо
  <ul className={`${css.contList} ${contacts.length ? '' : css.emptyList}`}>
    {contacts.map(contact => (
      <li key={contact.id} className={css.listItem}>
        {contact.name}: {contact.number}
        <button
          className={css.myButton}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
