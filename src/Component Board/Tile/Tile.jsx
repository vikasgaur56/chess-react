import './Tile.css';

function Tile({ number, image }) {
  if (number % 2 == 0) {
    return (
      <div className='tile black-tile'>
        <img id='chessImg' src={image} />
      </div>
    );
  } else {
    return (
      <div className='tile white-tile'>
        <img id='chessImg' src={image} />
      </div>
    );
  }
}
export default Tile;
