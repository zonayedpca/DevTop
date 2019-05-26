import React from 'react';
import { FiTrash } from 'react-icons/fi';

import { firstLetter, short } from '../../../utils';

export default ({ data: { name, link }, onRemove }) => (
  <div className="bookmark-single">
    <div onClick={onRemove} className="bookmark-tool">
      <p><FiTrash /></p>
    </div>
    <a href={link}>
      <div className="bookmark-title">
        <span>{firstLetter(link)}</span>
        <p>{name}</p>
      </div>
      <div className="bookmark-link">
        {short(link, 15)}
      </div>
    </a>
  </div>
)
