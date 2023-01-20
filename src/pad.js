
class Pad
{
	static velocity = 300;
	static playingCol = 0;
	static timing = 0.0;

	constructor(x, y)
	{

		this.x = x;
		this.y = y;

		this.hCells = 16;
		this.vCells = 16;

		this.cellSize = 16;

		this.cellSpacing = 2;

		this.matrix = this.createMatrix(this.hCells, this.vCells, false);

		// Calculate dimensions:
		this.width = this.vCells * this.cellSize + this.vCells * this.cellSpacing;
		this.height = this.hCells * this.cellSize + this.hCells * this.cellSpacing;
	
		this.color = '#000000FF';
	}

	update()
	{
		// If the mouse is inside the pad area:
		if((mouseX > this.x && mouseX < this.x + this.width) && (mouseY > this.y && mouseY < this.y +this.height))
		{
			
		}
		else
		{
		}

		Pad.timing ++;

		if(Pad.timing >= 3600 / Pad.velocity)
		{
			Pad.timing = 0;
			Pad.playingCol ++;

			if(Pad.playingCol >= this.vCells)
			{
				Pad.playingCol = 0;
			}

			for(let i = 0; i < this.hCells; i ++)
			{
				this.matrix[i][Pad.playingCol].play();
			}
		}
	}

	render(ctx)
	{
		// Draw background:
		ctx.fillStyle = this.color;
		let offset = 4;

		ctx.beginPath();
		ctx.roundRect(this.x - offset-1,  this.y - offset-1, this.width +2*offset, this.height +2*offset, 4);
		ctx.fill();

		// Render matrix cells:
		for(let i = 0; i < this.hCells; i ++)
		{
			for(let j = 0; j < this.vCells; j ++)
			{
				this.matrix[i][j].update();
				this.matrix[i][j].render(ctx);
			}
		}

		//
	}

	click()
	{
		for(let i = 0; i < this.hCells; i ++)
		{
			for(let j = 0; j < this.vCells; j ++)
			{
				if(this.matrix[i][j].isSelected)
				{
					this.matrix[i][j].toggle();
				}
			}
		}
	}

	resetPad()
	{
		for(let i = 0; i < this.hCells; i ++)
		{
			for(let j = 0; j < this.vCells; j ++)
			{
				this.matrix[i][j] = false;
			}
		}
	}

	createMatrix( rows, cols)
	{

	  var arr = [];

	  // Creates all lines:
	  for(var i=0; i < rows; i++)
	  {

	      // Creates an empty line
	      arr.push([]);

	      // Adds cols to the empty line:
	      arr[i].push( new Array(cols));

	      for(var j=0; j < cols; j++)
	      {
	        // Initializes:
	        arr[i][j] = new Cell(this.x +j* Cell.SIZE + j*this.cellSpacing, this.y +i * Cell.SIZE + i*this.cellSpacing, i, j);
	      }
	  }

	return arr;
	}
}