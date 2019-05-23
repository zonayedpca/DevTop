import React from 'react';
import { FiCopy, FiTrash2 } from "react-icons/fi";

export default () => (
  <li className="card clipboard-content">
    <p>{String(`Lorem ispum simple di click djfis injfbjd bfjhbgsdhgb hdbghjdsbghj bdhgbdhbg dfs bghjfds bfhsb jhfb hjbdhgbsd khbgshbd hjsbdg hbsdjgb hjfsb bfsxdhsfsdfb ff hdbfjb sdjfbsfhmszbf jsbfh sbfhsb fhb shfbghjsb hsfb hjbshjbdsfb sdb hdsbf hdsbf`).slice(0, 183)}</p>
    <div className="tools">
      <ul>
        <li className="copy"><FiCopy /></li>
        <li className="remove"><FiTrash2 /></li>
      </ul>
    </div>
  </li>
)
