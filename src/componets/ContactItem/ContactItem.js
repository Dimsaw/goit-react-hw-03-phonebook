import React from "react";
import s from "./ContactItem";
import PropTypes from "prop-types";

const ContactItem = ({ name, number, id, btnDelete }) => {
  return (
    <li id={id} className={s.item}>
      {name}: {number}
      <button className={s.btn} type="button" onClick={() => btnDelete(id)}>
        <span className={s.btn__name}>delete</span>
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  btnDelete: PropTypes.func.isRequired,
};
