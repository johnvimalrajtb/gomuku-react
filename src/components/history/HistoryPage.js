import React, { Component } from 'react'
import PropTypes from "prop-types";
import History from "./History";

class HistoryPage extends Component {
  render() {
    return(
     <History />
    )
  }
}

HistoryPage.contextTypes = {
  auth: PropTypes.object,
};

export default HistoryPage;

// Path: src\components\games\HistoryPage.js