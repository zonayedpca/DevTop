import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import TokenInput from './TokenInput';

import './settings.css';

const Settings = () => {
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
        hello world dummy text hello world dummy text hello world dummy text hello world dummy text hello world dummy text hello world dummy text hello world dummy text hello world dummy text hello world dummy text hello world dummy text hello world dummy text hello world dummy text hello world dummy text hello world
        <TokenInput name="GitHub" />
        <TokenInput name="Bitly" />
      </div>
    </div>
  )
}

export default Settings;
