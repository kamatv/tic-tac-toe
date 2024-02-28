import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import TicTacToe from '.'

describe('testing Home Page', () => {
  it('First Turn is Of Cross (95 ms)', () => {
    render(<TicTacToe />)
    const button1 = screen.getByTestId('button-1')
    fireEvent.click(button1)
    expect(button1).toHaveTextContent('X')
  })

  it('Second Turn is Of Circle ', () => {
    render(<TicTacToe />)
    const button1 = screen.getByTestId('button-1')
    fireEvent.click(button1)
    expect(button1).toHaveTextContent('X')
    const button2 = screen.getByTestId('button-2')
    fireEvent.click(button2)
    expect(button2).toHaveTextContent('O')
  })

  it('Button getting disabled onClick', () => {
    render(<TicTacToe />)
    const button3 = screen.getByTestId('button-3')
    fireEvent.click(button3)
    expect(button3).toHaveTextContent('X')
    expect(button3).toBeDisabled()
  })

  it('Test Case 1 - For Winner || Horizontal & Start button is present ', () => {
    render(<TicTacToe />)
    const button1 = screen.getByTestId('button-1')
    fireEvent.click(button1)
    expect(button1).toHaveTextContent('X')

    const button4 = screen.getByTestId('button-4')
    fireEvent.click(button4)
    expect(button4).toHaveTextContent('O')

    const button2 = screen.getByTestId('button-2')
    fireEvent.click(button2)
    expect(button2).toHaveTextContent('X')

    const button6 = screen.getByTestId('button-6')
    fireEvent.click(button6)
    expect(button6).toHaveTextContent('O')

    const button3 = screen.getByTestId('button-3')
    fireEvent.click(button3)
    expect(button3).toHaveTextContent('X')

    const winner = screen.getByTestId('winner')
    expect(winner).toHaveTextContent('Cross Is Winner')
    const start = screen.queryByTestId('start')
    expect(start).toBeInTheDocument()
  })

  it('Test Case 2 - For Winner || Vertical ', () => {
    render(<TicTacToe />)
    const button1 = screen.getByTestId('button-1')
    fireEvent.click(button1)
    expect(button1).toHaveTextContent('X')

    const button2 = screen.getByTestId('button-2')
    fireEvent.click(button2)
    expect(button2).toHaveTextContent('O')

    const button4 = screen.getByTestId('button-4')
    fireEvent.click(button4)
    expect(button4).toHaveTextContent('X')

    const button6 = screen.getByTestId('button-6')
    fireEvent.click(button6)
    expect(button6).toHaveTextContent('O')

    const button7 = screen.getByTestId('button-7')
    fireEvent.click(button7)
    expect(button7).toHaveTextContent('X')

    const winner = screen.getByTestId('winner')
    expect(winner).toHaveTextContent('Cross Is Winner')
    const start = screen.queryByTestId('start')
    expect(start).toBeInTheDocument()
  })

  it('onClick the start button the game restarts ', () => {
    render(<TicTacToe />)
    const button1 = screen.getByTestId('button-1')
    fireEvent.click(button1)
    expect(button1).toHaveTextContent('X')

    const button2 = screen.getByTestId('button-2')
    fireEvent.click(button2)
    expect(button2).toHaveTextContent('O')

    const button5 = screen.getByTestId('button-5')
    fireEvent.click(button5)
    expect(button5).toHaveTextContent('X')

    const button6 = screen.getByTestId('button-6')
    fireEvent.click(button6)
    expect(button6).toHaveTextContent('O')

    const button9 = screen.getByTestId('button-9')
    fireEvent.click(button9)
    expect(button9).toHaveTextContent('X')

    const winner = screen.getByTestId('winner')
    expect(winner).toHaveTextContent('Cross Is Winner')
    const start = screen.queryByTestId('start')
    expect(start).toBeInTheDocument()
    fireEvent.click(start)

    const button3 = screen.getByTestId('button-3')
    fireEvent.click(button3)
    expect(button3).toHaveTextContent('X')

  })

  it('Test Case 4 - For Draw ( ', () => {
    render(<TicTacToe />)
    const button1 = screen.getByTestId('button-1')
    fireEvent.click(button1)
    expect(button1).toHaveTextContent('X')

    const button2 = screen.getByTestId('button-2')
    fireEvent.click(button2)
    expect(button2).toHaveTextContent('O')

    const button3 = screen.getByTestId('button-3')
    fireEvent.click(button3)
    expect(button3).toHaveTextContent('X')

    const button4 = screen.getByTestId('button-4')
    fireEvent.click(button4)
    expect(button4).toHaveTextContent('O')

    const button5 = screen.getByTestId('button-5')
    fireEvent.click(button5)
    expect(button5).toHaveTextContent('X')

    const button6 = screen.getByTestId('button-6')
    fireEvent.click(button6)
    expect(button6).toHaveTextContent('O')

    const button8 = screen.getByTestId('button-8')
    fireEvent.click(button8)
    expect(button8).toHaveTextContent('X')

    const button7 = screen.getByTestId('button-7')
    fireEvent.click(button7)
    expect(button7).toHaveTextContent('O')

    const button9 = screen.getByTestId('button-9')
    fireEvent.click(button9)
    expect(button9).toHaveTextContent('X')

    const winner = screen.getByTestId('winner')
    expect(winner).toHaveTextContent('Draw')
    const start = screen.queryByTestId('start')
    expect(start).toBeInTheDocument()
  })

  it('Test Case 3 - For Winner || Diagonal  ', () => {
    render(<TicTacToe />)
    const button1 = screen.getByTestId('button-1')
    fireEvent.click(button1)
    expect(button1).toHaveTextContent('X')

    const button2 = screen.getByTestId('button-2')
    fireEvent.click(button2)
    expect(button2).toHaveTextContent('O')

    const button5 = screen.getByTestId('button-5')
    fireEvent.click(button5)
    expect(button5).toHaveTextContent('X')

    const button6 = screen.getByTestId('button-6')
    fireEvent.click(button6)
    expect(button6).toHaveTextContent('O')

    const button9 = screen.getByTestId('button-9')
    fireEvent.click(button9)
    expect(button9).toHaveTextContent('X')

    const winner = screen.getByTestId('winner')
    expect(winner).toHaveTextContent('Cross Is Winner')
    const start = screen.queryByTestId('start')
    expect(start).toBeInTheDocument()
  })
}
)
