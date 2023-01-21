class Cell
{
	static SIZE = 16;

	constructor(x, y, row, col)
	{
		this.x = x;
		this.y = y;
		this.isSelected = false;
		this.isActive = false;
		this.row = row;
		this.col = col;
	}

	update()
	{
		//If mouse is inside bounding box:
		if((mouseX > this.x && mouseX < this.x + Cell.SIZE) && (mouseY > this.y && mouseY < this.y + Cell.SIZE))
		{
			this.isSelected = true;
		}
		else
		{
			this.isSelected = false;
		}
	}

	toggle()
	{
		this.isActive = !this.isActive;
	}

	play()
	{
		if(this.isActive)
		{
			//synth.triggerAttackRelease(scale[this.row], "20n");
			bass.triggerAttackRelease(scale[this.row], "20n");

		}
	}

	render(ctx)
	{
		ctx.fillStyle = '#FFFFFF33';

		if(this.isActive)
		{
			ctx.fillStyle = '#FFFFFFAA';
		}
		else if(this.isSelected)
		{
			ctx.fillStyle = '#FFFFFF66';
		}

		if(Pad.playingCol == this.col)
		{
			ctx.fillStyle = '#FFFFFF55';
			if(this.isActive)
			{
				ctx.fillStyle = '#FFFFFFDD'
			}
		}

		ctx.beginPath();
		ctx.roundRect(this.x, this.y, Cell.SIZE, Cell.SIZE, 2);
		ctx.fill();
	}
}