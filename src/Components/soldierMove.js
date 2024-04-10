function blackSoldierMove(i,j){

let x =i;
let y=j-1;
return[{x,y}];
}
function whiteSoldierMove(i,j){
	const x =i;
	const y= j+1;
return[{x,y}];
}
export  {

	blackSoldierMove,
	whiteSoldierMove
};