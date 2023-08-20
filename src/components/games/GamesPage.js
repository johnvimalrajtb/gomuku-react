import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Game from './Game';
import './game.css';
  
class GamesPage extends Component {

render () {
  return (
    
      <Game />
      )
}

};

GamesPage.contextTypes = {
auth: PropTypes.object
}

export default GamesPage

// Path: src\components\games\Game.js