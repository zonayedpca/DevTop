import React from 'react';
import { FiCopy, FiTrash2 } from "react-icons/fi";

import { short, blankChar } from '../../../utils';

export default ({ id, data, onCopy, onRemove }) => {
  const isBlankChar = (/^\s+$/g).test(data);
  return (
    <li id={id} className="card clipboard-content">
      <p className={isBlankChar ? `blank-char` : ''}>{isBlankChar ? blankChar(data) : short(data)}</p>
      <div className="tools">
        <ul>
          <li onClick={onCopy.bind(this, id)} className="copy"><FiCopy /></li>
          <li onClick={onRemove.bind(this, id)} className="remove"><FiTrash2 /></li>
        </ul>
      </div>
    </li>
  )
}
