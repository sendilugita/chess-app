function Rook(color, position) {
	Piece.call(this, color, 'rook', position)
	this.icon = '&#9820;'
}

Rook.move = function(pos) {
	Piece.moveTop(pos)
	Piece.moveBottom(pos)
	Piece.moveRight(pos)
	Piece.moveLeft(pos)
	return Piece.allowedMove
}