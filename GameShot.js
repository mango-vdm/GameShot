var score=0;
var bullets="IIIII";
document.getElementById("scores").value = score;
document.getElementById("shotes").value = bullets;
document.body.onkeydown = reload;

function five(){
	score += 5;	
}
function ten(){
	score += 5;
}
function twenty(){
	score += 10;		
}

function shot(){		
	
	if (bullets!=""){
	bullets = bullets.slice(0,-1);
	document.getElementById("shotes").value = bullets;
	document.getElementById("scores").value = score;
	} else alert("No bullets!");
}

function reload(e){
	if (e.keyCode==82) {
			if (bullets =="IIIII"){
				alert("You have 5 bullets to shot!"); 
				}
			else {
				if (score<20) {
				alert("You do not have enough scores"); return;}
				else {score -=20; bullets="IIIII";  
				document.getElementById("scores").value = score;
				document.getElementById("shotes").value = bullets;
				}
			}
	}
}


function randomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var block = document.getElementById("five");

var timer = setInterval(rnd,1000);

var timerGame = setInterval(function (){alert("Game over!");
score=0;
bullets="IIIII";
document.getElementById("scores").value = score;
document.getElementById("shotes").value = bullets;
document.body.onkeydown = reload;},40000);

function rnd(){
	block.style.top = randomInt(0, 300) + "px";
	block.style.left = randomInt(0, 900) + "px";
}