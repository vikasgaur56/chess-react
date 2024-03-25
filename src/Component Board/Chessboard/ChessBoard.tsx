import "./ChessBoard.css";
import Tile from "../Tile/Tile.tsx";

const verticalaxis=["1","2","3","4","5","6","7","8"];
	const horizontalaxis=["a","b","c","d","e","f","g","h"];
const piece=[];


for(let i=0;i<8;i++){
piece.push({image:"Chess_bdt60.png",x:i,y:6})
}
function ChessBoard(){
	let board=[];

	for(let i=verticalaxis.length-1;i>=0;i--){
		for(let j=0;j<horizontalaxis.length;j++){	
			let number=j+i+2;
			piece.forEach((p)=>{
        
         if(p.x=i&&p.y==j){
 let image = p.image;


console.log(image);
         }
			});
	
			
			board.push(<Tile number={number} image={image}/>);
			
	}
	}
	return(

<div className="chessboard">
{board}
</div>

	);
}
export default ChessBoard;
