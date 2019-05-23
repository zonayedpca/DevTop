import React, { Component } from 'react';
import { FiPauseCircle, FiPlayCircle, FiTrash2 } from 'react-icons/fi';

import Content from './Content';
import { Head } from '../../common';

class Code extends Component {
  render() {
    return (
      <div className="code-area">
        <Head title="Code">
          <li className="pause"><FiPauseCircle /></li>
          <li className="play"><FiPlayCircle /></li>
          <li className="remove"><FiTrash2 /></li>
        </Head>
        <ul>
          <Content />
        </ul>
      </div>
    )
  }
}

export default Code;
