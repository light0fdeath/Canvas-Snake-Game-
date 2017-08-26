var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var cw = canvas.width;
var ch = canvas.height;

var sw = 20;
var sh = 20;

var posw = cw/2-10;
var posh = ch/2-10;

var right = false;
var left = false;
var topp = false;
var down = false;

var p = Math.random()*cw/2;
var q = Math.random()*ch/2 +50;

var score = 0;

function drawscore(){
    ctx.font = "20px Arial";
    ctx.fillStyle = "Green";
    ctx.fillText("Points: "+score, 10, 20);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
	if(e.keyCode == 37){
		left = true;
		topp = down = right = false;
	}
	else if(e.keyCode == 38){
		topp = true;
		left = down = right = false;
	}
	else if(e.keyCode == 39){
		right = true;
		left = down = topp = false;
	}
	else if(e.keyCode == 40){
		down = true;
		left = right = topp = false;
	}
	
}

function keyUpHandler(e){
	if(e.keyCode == 37){
		//left = false;
	}
	else if(e.keyCode == 38){
		//topp = false;
	}
	else if(e.keyCode == 39){
		//right = false;
	}
	else if(e.keyCode == 40){
		//down = false;
	}
}

function drawSnake() {
    ctx.beginPath();
    ctx.rect(posw, posh, sw, sh);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawrandom(){

    if(p < 50){
        p = p + 50;
        } 
    else if(p > cw - 50){
        p = p-50;
        }
    if(q < 50){
        q = q+50;
        }
    else if(q > ch - 50){
        q = q-50;
        }

    ctx.beginPath();
    ctx.rect(p, q, 30, 30);
    ctx.fillStyle = "#7F163C";
    ctx.fill();
    ctx.closePath();

}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawrandom();
    drawscore();
    if(left){
    	posw -=2;
    }
    else if(right){
    	posw +=2;
    }
    else if(down){
    	posh += 2;
    }
    else if(topp){
    	posh -=2;
    }
    if(posw+5 < 0 || posw+8 > cw || posh+5 < 0 || posh+14 > ch){
    	alert("Game Over");
    	document.location.reload();
    }

    if((posw > p && posw < p+30 && posh > q && posh < q+30) ||(posw+sw > p && posw+sw < p+30 && posh+sh > q && posh+sh < q+30)){
        p = cw*Math.random() - p*Math.random();
        q = ch*Math.random() - q*Math.random();
        score ++;
    } 

}
 
setInterval(draw, 5);

/*

var count = 1;

var randomNoA = [];
for(i=0; i<100; i++){
    randomNoA[i] = Math.random();
}

var randomNoB = [];
for(i=0; i<100; i++){
    randomNoB[i] = Math.random();
}
p = p*Math.random();
        q = q*Math.random();

        if(p > cw || q >ch){
            p = p*Math.random();
            q = q*Math.random();

            p = cw-p;
            q = cw-q;
        }

        */