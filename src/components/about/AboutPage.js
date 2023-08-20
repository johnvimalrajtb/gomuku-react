import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <h2> About </h2>
      <p>
      A Web Application for playing Gomoku, a two-player strategy board game.
      Instead of using the traditional 19x19 board, this application uses a  custom nxn board.
      Please select the size of the board and the number of consecutive pieces to win.

      Gomoku Game Instructions:
      <ul>
        <li>Black plays first, and players alternate in placing a stone of their color on an empty intersection.</li>
        <li>The winner is the first player to get an unbroken row of five stones horizontally, vertically, or diagonally.</li>
        <li>Unlike Go, Gomoku is played on an infinite board.</li>
      </ul>
      </p>
    </div>
  )
}

export default AboutPage
