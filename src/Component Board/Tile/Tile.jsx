import './Tile.css';

function Tile({ number, image, click, x, y }) {
  if (number % 2 === 0) {
    return (
      <div onClick={() => click(x, y)} className='tile black-tile'>
        <img id='chessImg' src={image} />
      </div>
    );
  } else {
    return (
      <div className='tile white-tile' onClick={() => click(x, y)}>
        <img id='chessImg' src={image} />
      </div>
    );
  }
}
export default Tile;
