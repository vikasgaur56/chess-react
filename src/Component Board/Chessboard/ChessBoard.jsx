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
for(let p=0;p<2;p++){
  const type= p==0?"d":"l";
  const y= p==0?7:0;
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
  let board = [];

  for (let j = verticalaxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalaxis.length; i++) {
      let number = j + i + 2;
      let image = undefined;
      let x="";
      let y="";
      piece.forEach(p => {
        if (p.x === i && p.y === j) {
          image = p.image;
          x=i;
          y=j;
          console.log(x,y);
        }
      });
      board.push(<Tile key={`${i}${j}`} click={clickConsole} x={x} y={x}  number={number} image={image} />);
    }
  }
  return <div className='chessboard'>{board}</div>;
}
export default ChessBoard;
