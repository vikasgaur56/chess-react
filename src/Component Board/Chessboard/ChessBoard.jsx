import "./ChessBoard.css";
import Tile from "../Tile/Tile.jsx";
import { useState } from "react";

const verticalaxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalaxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const piece = [];

for (let i = 0; i < 8; i++) {
  piece.push({ image: "Chess_pdt60.png", x: i, y: 6 });
}

for (let i = 0; i < 8; i++) {
  piece.push({ image: "Chess_plt60.png", x: i, y: 1 });
}
for (let p = 0; p < 2; p++) {
  const type = p === 0 ? "d" : "l";
  const y = p === 0 ? 7 : 0;
  piece.push({ image: `Chess_r${type}t60.png`, x: 0, y: y });
  piece.push({ image: `Chess_r${type}t60.png`, x: 7, y: y });
  piece.push({ image: `Chess_n${type}t60.png`, x: 1, y: y });
  piece.push({ image: `Chess_b${type}t60.png`, x: 2, y: y });
  piece.push({ image: `Chess_q${type}t60.png`, x: 3, y: y });
  piece.push({ image: `Chess_k${type}t60.png`, x: 4, y: y });
  piece.push({ image: `Chess_b${type}t60.png`, x: 5, y: y });
  piece.push({ image: `Chess_n${type}t60.png`, x: 6, y: y });
}

function ChessBoard() {
  const [color, setColor] = useState(false);

  const clickConsole = (x, y) => {
    console.log("Clicked at coordinates:", { x, y });
    if (
      (x === 0 && y === 7) ||
      (x === 7 && y === 7) ||
      (x === 0 && y === 0) ||
      (x === 7 && y === 0)
    ) {
      console.log("elephant");
    } else if (
      (x === 2 && y === 7) ||
      (x === 5 && y === 7) ||
      (x === 2 && y === 0) ||
      (x === 5 && y === 0)
    ) {
      console.log("camel");
    } else if (
      (x === 1 && y === 7) ||
      (x === 6 && y === 7) ||
      (x === 1 && y === 0) ||
      (x === 6 && y === 0)
    ) {
      console.log("horse");
    } else if ((x === 3 && y === 7) || (x === 3 && y === 0)) {
      console.log("queen");
    } else if ((x === 4 && y === 7) || (x === 4 && y === 0)) {
      console.log("king");
    }
    for (let i = 0; i < 8; i++) {
      if (x === i && y === 6) {
        console.log("soldier", x, y + 1);
        setColor(true);
      } else if (x === i && y === 1) {
        console.log("soldier", x, y + 1);
        setColor(true);
      }
    }
  };

  let board = [];

  for (let j = verticalaxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalaxis.length; i++) {
      let number = j + i + 2;
      let image = undefined;
      let x = i;
      let y = j;
      piece.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });

      board.push(
        <Tile
          className={`${color}?colorChange:''`}
          key={`${i}${j}`}
          click={clickConsole}
          x={x}
          y={y}
          number={number}
          image={image}
        />
      );
    }
  }
  return <div className="chessboard">{board}</div>;
}
export default ChessBoard;
