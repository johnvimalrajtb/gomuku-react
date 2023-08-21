import React from 'react'

const handleChange = (event) => {

  localStorage.setItem('boardSize', event.target.value);

};

const handleStart = () => {
  window.location = "/game";
}

const HomePage = () => {
  let value =  localStorage.getItem("boardSize");
  if (value == null) {
    value = 5;
  }
  let maxBoardSize = 20;
  return (
    <div>
      <h2> Homepage </h2>
      <label>

       Select Board Size?

       <select  onChange={handleChange}>
            {Array(maxBoardSize).fill(1,5,20).map((el, i) =>
              
              <option value={i}>{i}</option>
            )}
          </select>
          <div className="flex-container">
          <div>
            <button className="start" id="start" onClick={handleStart}>
              Start
            </button>
          </div>
        </div>
     </label>
    </div>
  )
}

export default HomePage
