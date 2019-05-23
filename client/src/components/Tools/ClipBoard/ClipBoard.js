import React, { Component } from 'react';
import { FiPauseCircle, FiPlayCircle, FiTrash2 } from 'react-icons/fi';

import Content from './Content';
import { Head } from '../../common';

class ClipBoard extends Component {
  render() {
    return (
      <div className="clipboard-area">
        <Head title="ClipBoard">
          <li className="pause"><FiPauseCircle /></li>
          <li className="play"><FiPlayCircle /></li>
          <li className="remove"><FiTrash2 /></li>
        </Head>
        <ul>
          <Content />
          <li className="card">Lorem ispum simple di click djfis injfbjd bfjhbgsdhgb hdbghjdsbghj bdhgbdhbg dfs bghjfds bfhsb jhfb hjbdhgbsd khbgshbd hjsbdg hbsdjgb hjfsb bfsxdh</li>
          <li className="card">Lorem ispum simple di click djfis injfbjd bfjhbgsdhgb hdbghjdsbghj bdhgbdhbg dfs bghjfds bfhsb jhfb hjbdhgbsd khbgshbd hjsbdg hbsdjgb hjfsb bfsxdh</li>
          <li className="card">Lorem ispum simple di click djfis injfbjd bfjhbgsdhgb hdbghjdsbghj bdhgbdhbg dfs bghjfds bfhsb jhfb hjbdhgbsd khbgshbd hjsbdg hbsdjgb hjfsb bfsxdh</li>
          <li className="card">Lorem ispum simple di click djfis injfbjd bfjhbgsdhgb hdbghjdsbghj bdhgbdhbg dfs bghjfds bfhsb jhfb hjbdhgbsd khbgshbd hjsbdg hbsdjgb hjfsb bfsxdh</li>
          <li className="card">Lorem ispum simple di click djfis injfbjd bfjhbgsdhgb hdbghjdsbghj bdhgbdhbg dfs bghjfds bfhsb jhfb hjbdhgbsd khbgshbd hjsbdg hbsdjgb hjfsb bfsxdh</li>
          <li className="card">Lorem ispum simple di click djfis injfbjd bfjhbgsdhgb hdbghjdsbghj bdhgbdhbg dfs bghjfds bfhsb jhfb hjbdhgbsd khbgshbd hjsbdg hbsdjgb hjfsb bfsxdh</li>
        </ul>
      </div>
    )
  }
}

export default ClipBoard;
