function Piece(color, name, position) {
	this.color = (parseInt(color) === 0) ? 'w' : 'b'
	this.name = String(name)
	this.pos = parseInt(position)
}

Piece.allowedMove = []

Piece.moveTop = function(pos) {
	for(let i = (pos - 10); i >= 11; i -= 10) Piece.allowedMove.push(i)
}

Piece.moveBottom = function(pos) {
	for(let i = (pos + 10); i <= 88; i += 10) Piece.allowedMove.push(i)
}

Piece.moveRight = function(pos) {
	for(let i = (pos + 1); parseInt((''+i).substr(1)) <= 8; i += 1)
		Piece.allowedMove.push(i)
}

Piece.moveLeft = function(pos) {
	for(let i = (pos - 1); parseInt((''+i).substr(1)) >= 1; i -= 1)
		Piece.allowedMove.push(i)
}