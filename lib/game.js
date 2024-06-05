function Game(pieces) {
	Board.call(this, pieces)
	
	this.refresh = function() {
		Board.call(this, pieces)
	}
}