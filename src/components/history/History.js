import React from "react";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{}],
    };
  }

  init() {
    this.gameList(this.state.history);
  }

  gameList(history) {
    for (var i = 0; i < history.length; i++) {
      console.log(history[i].gameId);
      console.log(history[i].winner);
      console.log(history[i].date);
      console.log(history[i].boardSize);
      console.log(history[i].area);
    }
    return history;
  }

  componentDidMount() {
    this.init();
  }
  /**
   * 
   * @returns       let historyData = {
        gameId: this.state.history.length + 1,
        winner: this.state.gameState,
        date: new Date().toLocaleString(),
        boardSize: this.state.boardSize,
        area: this.state.area,
      }
   */
  openGameLog(gameId) {
    window.location = "game-log/:" + { gameId };
  }
  /**
   *
   * @returns render
   */
  render() {
    const emptyMessage = <p>There are no previous games played yet.</p>;
    let history = localStorage.getItem("history");
    if (history == null) {
      return emptyMessage;
    } else {
      let items = Array.from(JSON.parse(history));
      return (
        <div className="game" id="history">
          <div className="App">
            <table>
              <tr>
                <th>Game ID</th>
                <th>Date</th>
                <th>Winner</th>
                <th>Board Size</th>
                <th>Action</th>
              </tr>
              {items.map((val) => {
                return (
                  <tr key={val.gameId}>
                    <td>#{val.gameId}</td>
                    <td>{val.date}</td>
                    <td>{val.winner}</td>
                    <td>{val.boardSize}</td>
                    <td>
                    <a href={'/game-log/'+val.gameId}> View game log</a>
                      {/* <button className="leaveGame" id="leaveGame" 
                      onClick={this.openGameLog(val.gameId)}>
                      View game log
                    </button> */}
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      );
    }
  }
}
export default History;
