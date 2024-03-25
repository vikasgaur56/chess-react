import './ChessBoard.css';
import Tile from '../Tile/Tile.jsx';

const verticalaxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
const horizontalaxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const piece = [];

for (let i = 0; i < 8; i++) {
  piece.push({ image: 'Chess_pdt60.png', x: i, y: 6 });
}

for (let i = 0; i < 8; i++) {
  piece.push({ image: 'Chess_plt60.png', x: i, y: 1 });
}

function ChessBoard() {
  let board = [];

  for (let j = verticalaxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalaxis.length; i++) {
      let number = j + i + 2;
      let image = undefined;
      piece.forEach(p => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });
      board.push(<Tile number={number} image={image} />);
    }
  }
  return <div className='chessboard'>{board}</div>;
}
export default ChessBoard;
