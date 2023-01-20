
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let pad = new Pad(20, 68);

let mouseX = 0;
let mouseY = 0;


// wait for the HTML to load
document.addEventListener('DOMContentLoaded', init)

// setup config variables and start the program
function init () 
{
  canvas.addEventListener("click", mouseClick, false);
  document.addEventListener("mousemove", mouseMove, false);
}

function update()
{
	drawPadBackground(ctx);

	pad.update();
	pad.render(ctx);

	//console.log(mouseX+ ' '+mouseY);

	window.requestAnimationFrame(update);
}

function drawPadBackground(ctx)
{
	//clear the graphics
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//Outer background:
	let offset = 2;

	ctx.fillStyle = '#DDDDDDFF';
	ctx.beginPath();
	ctx.roundRect(offset, offset, canvas.width- 2*offset, canvas.height-2*offset, 6);
	ctx.fill();

	ctx.strokeStyle = '#EEEEEEFF';
	ctx.beginPath();
	ctx.roundRect(offset, offset, canvas.width- 2*offset, canvas.height-2*offset, 6);
	ctx.lineWidth = 1;
	ctx.stroke();
}

function mouseClick(e) 
{
	pad.click();
}

function mouseMove(e)
{
	if(canvas != null)
	{
		let cy = canvas.getBoundingClientRect().top;
		let cx = canvas.getBoundingClientRect().left;

		mouseX = e.clientX -cx;
		mouseY = e.clientY -cy;
	}
}

window.requestAnimationFrame(update);