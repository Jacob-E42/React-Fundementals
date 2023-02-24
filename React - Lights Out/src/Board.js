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

function Board({ nrows = 4, ncols = 4, chanceLightStartsOn = 0.5 }) {
	const [board, setBoard] = useState(createBoard());

	/** create a board nrows high/ncols wide, each cell randomly lit or unlit */
	function createBoard() {
		let initialBoard = [];
		// TODO: create array-of-arrays of true/false values
		function generateRandomBoolean(chanceLightStartsOn) {
			return Math.random() < chanceLightStartsOn;
		}
		for (let row = 0; row < nrows; row++) {
			initialBoard[row] = Array.from({ length: ncols });
			// console.log(initialBoard[row]);
			for (let col = 0; col < ncols; col++) {
				initialBoard[row][col] = generateRandomBoolean(chanceLightStartsOn);
			}
		}
		return initialBoard;
	}

	function hasWon() {
		// TODO: check the board in state to determine whether the player has won.
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

			// TODO: Make a (deep) copy of the oldBoard

			// TODO: in the copy, flip this cell and the cells around it

			// TODO: return the copy
		});
	}

	// if the game is won, just show a winning msg & render nothing else

	// TODO

	// make table board
	return <div className="board">{board}</div>;
	// TODO
}

export default Board;
