import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn = 0.25 }) {
	const [board, setBoard] = useState(createBoard());

	/** create a board nrows high/ncols wide, each cell randomly lit or unlit */
	function createBoard() {
		let initialBoard = [];
		// create array-of-arrays of true/false values
		for (let row = 0; row < nrows; row++) {
			initialBoard[row] = Array.from({ length: ncols });
			for (let col = 0; col < ncols; col++) {
				initialBoard[row][col] = Math.random() < chanceLightStartsOn;
			}
		}
		return initialBoard;
	}

	function hasWon() {
		// check the board in state to determine whether the player has won.
		for (let row = 0; row < nrows; row++) {
			for (let col = 0; col < ncols; col++) {
				if (board[row][col] === true) return false;
			}
		}
		return true;
	}

	function flipCellsAround(coord) {
		setBoard((oldBoard) => {
			const [y, x] = coord.split("-").map(Number);

			const flipCell = (y, x, boardCopy) => {
				// if this coord is actually on board, flip it
				if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
					boardCopy[y][x] = !boardCopy[y][x];
				}
			};

			// Make a (deep) copy of the oldBoard
			const boardCopy = oldBoard.map((row) => [...row].map((col) => col));
			// in the copy, flip this cell and the cells around it
			flipCell(y, x, boardCopy);
			if (y - 1 >= 0) flipCell(y - 1, x, boardCopy);
			if (y + 1 < ncols) flipCell(y + 1, x, boardCopy);
			if (x - 1 >= 0) flipCell(y, x - 1, boardCopy);
			if (x + 1 < nrows) flipCell(y, x + 1, boardCopy);

			// return the copy
			return boardCopy;
		});
	}

	// if the game is won, just show a winning msg & render nothing else
	if (hasWon()) return <p>You won!</p>;

	// make table board
	return (
		<table className="board-table">
			<tbody>
				{board.map((row, rowIdx) => (
					<tr key={rowIdx}>
						{row.map((col, colIdx) => (
							<Cell key={`${rowIdx}-${colIdx}`} isLit={col} flipCellsAroundMe={() => flipCellsAround(`${rowIdx}-${colIdx}`)} />
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Board;
