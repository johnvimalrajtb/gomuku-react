import React from "react";

class GameRO extends React.Component {
  constructor(props) {
    super(props);

    const gameId = props.id;
    console.log(gameId);
    // initiate area'
    // gameId
    //let gameId = params.gameId;
    let history = Array.from(JSON.parse(localStorage.getItem("history")));
    console.log(JSON.stringify(history));
    let historyData = history[gameId - 1];
    
    if (historyData === undefined) {
      this.setState({});
    } else {
      // game state
      this.state = {
        blackStone: true,
        gameOver: true,
        gameState: historyData.winner,
        currValue: -1, // black - O, white - 1
        area: historyData.area,
        boardSize: historyData.boardSize,
      };
    }
    // functions
    this.init = this.init.bind(this);
  }

  init() {
    let board = document.getElementById("goBoard");
    board.className = "board";
    board.id = "board";
    board.style.width = "700px";
    board.style.height = "700px";

    for (let rindex = 0; rindex < this.state.boardSize; rindex++) {
      let row = document.createElement("div");
        //alert(JSON.stringify(this.state.area));
      row.className = "boardRow";
      for (let cindex = 0; cindex < this.state.boardSize; cindex++) {
        let boardCol = document.createElement("div");
        boardCol.className = "boardCol"; //default -1

        let cell = document.createElement("div");
        cell.className = "boardCell";

        if (this.state.area[rindex][cindex] === 0) {
          cell.className = "boardCell";
        } else if (this.state.area[rindex][cindex] === 1) {
          cell.className = "boardCellBlack";         
        }else {
          cell.className = "boardCellWhite";
        }
        cell.id = rindex + "-" + cindex;
        boardCol.appendChild(cell);
        row.appendChild(boardCol);
      }
      board.appendChild(row);
    }

    //number array number[0] - row, number[1] - column
    //initiate area
    let message = document.getElementById("message");
    if (message != null) {
      message.innerHTML =  this.state.gameState;
    }
  }

  componentDidMount() {
    if(this.state  && this.state.boardSize){
      this.init();
    }
    let backButton = document.getElementById("back");
    if (backButton != null)
    backButton.addEventListener("click", this.handleBack);
  }

  handleBack = () => {
      window.location = "/games";
  }
  render() {
    if(!this.state || !this.state.boardSize){
      return (<div className="game" id="history">Incorrect game id</div>);
    }
    return (
      <div className="game">
        <div className="game-board">
          <div className="goBoard" id="goBoard" />
        </div>
        <div className="messages">
          <div className="">
            <div className="messages" id="message">              
            </div>
          </div>
        </div>
        <div className="flex-container">
          <div>
            <button className="back" id="back" >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default GameRO;
