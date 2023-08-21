import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GameRO from './GameRO';
import './game.css';


class GamesROPage extends Component {

render () {
      const id = this.props.match.params.id;
  return (
        <GameRO id={id}/>
      )
}

};

GamesROPage.contextTypes = {
auth: PropTypes.object
}

export default GamesROPage

// Path: src\components\games\GameRoPage.js