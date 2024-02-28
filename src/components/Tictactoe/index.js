import React, { useState } from 'react'

const TicTacToe = () => {
  const [user, setUser] = useState('X')
  const [cells, setCells] = useState(Array(9).fill(''))
  const [isDraw, setIsDraw] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [isWinner, setIsWinner] = useState()

  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const checkWinner = (squares) => {
    let status = false
    for (let i = 0; i < 8; i++) {
      const [a, b, c] = combos[i]
      if (
        squares[a] !== '' &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        status = true
        return status
      }
    }
    return status
  }
  const setSquare = (idx) => {
    let squares = [...cells]
    //check if user is allowed to click on tile and then update...
    if (squares[idx] === '') {
      squares[idx] = user
      setCells([...squares])
      if (user === 'X') {
        setUser('O')
      } else {
        setUser('X')
      }

      //checkwinner and set game status
      const status = checkWinner(squares)
      if (status) {
        setIsWinner(squares[idx])
        setGameOver(true)
      }
      //draw if all cells are full
      const draw = squares.filter((i) => i === '').length === 0
      if (draw) {
        setIsDraw(draw)
        setGameOver(true)
      }
    }
  }

  const resetGame = () => {
    setCells([...Array(9).fill('')])
    setUser('X')
    setIsDraw(false)
    setGameOver(false)
    setIsWinner()
  }

  const getCell = (idx) => {
    const cellValue = cells[idx] === '' ? '/' : cells[idx]
    return (
      <td>
        <button
          data-testid={`button-${idx + 1}`}
          disabled={cellValue !== '/' || gameOver}
          onClick={() => setSquare(idx)}
          style={{
            backgroundColor: 'black',
            color: 'white',
            width: '4rem',
            height: '4rem',
            border: '0.5px solid white'
          }}
        >
          {cellValue}
        </button>
      </td>
    )
  }
  return (
    <>
      {/* {gameOver && ( */}
      <h2 data-testid="winner"
        style={{ padding: '0.5rem', color: 'yellow', visibility: gameOver ? 'visible' : 'hidden' }}>
        {
          isDraw
            ? 'Draw'
            : isWinner === 'O'
              ? 'Circle Is Winner'
              : 'Cross Is Winner'
        }
      </h2>
      {/* )} */}

      {/*  if draw or winner show button */}
      {/* {gameOver && ( */}
      <button
        data-testid="start"
        style={{
          backgroundColor: 'blue', color: 'white', padding: '0.5rem',
          visibility: gameOver ? 'visible' : 'hidden'
        }}
        onClick={() => resetGame()}
      >
        Start A New Game
      </button>
      {/* )} */}
      <div
        className="board"
        style={{
          padding: '0.5rem',
          color: 'white',
          textAlign: '-webkit-center'
        }}
      >
        <table>
          <tbody>
            <tr>
              {getCell(0)}
              {getCell(1)}
              {getCell(2)}
            </tr>
            <tr>
              {getCell(3)}
              {getCell(4)}
              {getCell(5)}
            </tr>
            <tr>
              {getCell(6)}
              {getCell(7)}
              {getCell(8)}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TicTacToe
