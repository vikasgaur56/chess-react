import './Tile.css';

function Tile({ number, image ,clickConsole}) 

const clickConsole = (x, y) => {
  console.log("Clicked at coordinates:", x, y);
}

{
  if (number % 2 == 0) {
    return (
      <div onClick={clickConsole} className='tile black-tile'>
        <img id='chessImg' src={image} />
      </div>
    );
  } 
  else {
    return (
      <div  className='tile white-tile'>
        <img id='chessImg' src={image} />
      </div>
    );


  }
}
export default Tile;