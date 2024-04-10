import { useState } from "react";
import "./chessBoard.css";
import {blackSoldierMove,whiteSoldierMove} from "./soldierMove.js";

const verticalaxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalaxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const allCord=[];
for(let a=8 ; a>=1; a--){
   
    for(let b=1 ; b<=8; b++ ){
      allCord.push({a,b});
    
    }
  }
   
function ChessBoard() {
  // const [board, setBoard] = useState([]);
    let board=[];
  const [players, setPlayers] = useState([
    { "left-black-elephant": { x: 1, y: 8 } },
    { "right-black-elephant": { x: 8, y: 8 } },
    { "left-black-horse": { x: 2, y: 8 } },
    { "right-black-horse": { x: 7, y: 8 } },
    { "left-black-camel": { x: 3, y: 8 } },
    { "right-black-camel": { x: 6, y: 8 } },
    { "black-queen": { x: 4, y: 8 } },
    { "black-king": { x: 5, y: 8 } },
    { "black-soldier": { x: 1, y: 7 } },
    { "black-soldier": { x: 2, y: 7 } },
    { "black-soldier": { x: 3, y: 7 } },
    { "black-soldier": { x: 4, y: 7 } },
    { "black-soldier": { x: 5, y: 7 } },
    { "black-soldier": { x: 6, y: 7 } },
    { "black-soldier": { x: 7, y: 7 } },
    { "black-soldier": { x: 8, y: 7 } },
    { "left-white-elephant": { x: 1, y: 1 } },
    { "right-white-elephant": { x: 8, y: 1 } },
    { "left-white-horse": { x: 2, y: 1 } },
    { "right-white-horse": { x: 7, y: 1 } },
    { "left-white-camel": { x: 3, y: 1 } },
    { "right-white-camel": { x: 6, y: 1 } },
    { "white-queen": { x: 4, y: 1 } },
    { "white-king": { x: 5, y: 1 } },
    { "white-soldier": { x: 1, y: 2 } },
    { "white-soldier": { x: 2, y: 2 } },
    { "white-soldier": { x: 3, y: 2 } },
    { "white-soldier": { x: 4, y: 2 } },
    { "white-soldier": { x: 5, y: 2 } },
    { "white-soldier": { x: 6, y: 2 } },
    { "white-soldier": { x: 7, y: 2 } },
    { "white-soldier": { x: 8, y: 2 } },
  ]);

  const [activeCoor,setactiveCoor]= useState([]);
  const [Coordinates,setCoordinates] = useState(allCord);
  const [refreshCount,setRefreshCount]= useState(0);
  // console.log(Coordinates);
const active=[]
  async function coordinates(i, j, image) {
   
    let name = image ? image : null;
    console.log({ i, j, image, name });

    if (name && name.length) {
      if (name === "black-soldier") {
          let blackcoor=blackSoldierMove(i,j);
         await setactiveCoor(blackcoor);
          console.log(activeCoor);
           }

      else if(name == "white-soldier"){
        let returnedCoor = whiteSoldierMove(i,j);
         await setactiveCoor(returnedCoor);
console.log(Object.values(activeCoor[0]));
       }
    }
  }
  // console.log("this is coord",activeCoor);
  for (let j = verticalaxis.length; j >= 1; j--) {
    for (let i = 1; i <= horizontalaxis.length; i++) {
      let number = i + j + 2;
      let image = null;
      players.forEach((obj) => {
        let values = Object.values(obj);
        let keys = Object.keys(obj);
        if (values[0].x === i && values[0].y === j) {
          image = keys[0];
          // console.log(image);
        }
      });

      const blackTile = (
        <div
          className="tile black-tile"
          coordinate={i + "-" + j}
          onClick={() => coordinates(i, j, image)}
        >
          {image && <img src={image + ".png"} />}
        </div>
      );
      const whiteTile = (
        <div
          className="tile white-tile"
          coordinate={i + "-" + j}
          onClick={() => coordinates(i, j, image)}
        >
          {image && <img src={image + ".png"} />}
        </div>
      );
      board.push(number % 2 === 0 ? blackTile : whiteTile);
    }
  }

  return <div className="board">{board} {refreshCount}</div>;
}

export default ChessBoard;
