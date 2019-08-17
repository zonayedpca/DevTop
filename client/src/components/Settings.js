import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TokenInput from './TokenInput';

import { verifyGithubToken, verifyBitlyToken } from '../actions';

import './settings.css';

const Settings = ({ verifyGithubToken, verifyBitlyToken }) => {
  return (
    <div className="settings">
      <AppBar position="static" color="default" style={{ background: '#fff' }}>
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <FiArrowLeft />
            </IconButton>
          </Link>
          <Typography variant="h6">
            Settings
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="content">
        <TokenInput onSubmit={verifyGithubToken} name="GitHub" />
        <TokenInput onSubmit={verifyBitlyToken} name="Bitly" />
      </div>
    </div>
  )
}

export default connect(null, { verifyGithubToken, verifyBitlyToken })(Settings);
