import { Button, Slide, useMediaQuery } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import AppToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GamesIcon from '@material-ui/icons/Games';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MergeTypeOutlinedIcon from '@material-ui/icons/MergeTypeOutlined';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Toolbar.css';
export const title = 'IDR Planning Poker';

export const Toolbar = () => {
  const history = useHistory();
  const isSmallScreen = useMediaQuery((theme: any)  => theme.breakpoints.down("xs"));

  return (
    <Slide direction='down' in={true} timeout={800}>
      <AppBar position='sticky' className='AppBar'>
        <AppToolbar>
          <div className='HeaderContainer'>
            <div
              className='HeaderLeftContainer'
              onClick={() => history.push('/')}
            >
              <Typography variant={isSmallScreen? 'subtitle1':'h5'} color='inherit' noWrap>
                {title}
              </Typography>
            </div>
            <div>
              <Button title="New Session" startIcon={<AddCircleOutlineIcon/>} color='inherit' onClick={() => history.push('/')}>
                {!isSmallScreen ? 'New Session': null}
              </Button>
              <Button startIcon={<MergeTypeOutlinedIcon/>} size={ isSmallScreen ? "small" : "large"}  color='inherit' onClick={() => history.push('/join')}>
                {!isSmallScreen ? 'Join Session' : null}
              </Button>
            </div>
          </div>
        </AppToolbar>
      </AppBar>
    </Slide>
  );
};
