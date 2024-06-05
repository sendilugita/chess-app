const firstDigit = function(num) {
	return parseInt((''+num).substr(0))
}

const lastDigit = function(num) {
	return parseInt((''+num).substr(1))
}

const Piece = function(color, name, position) {
	this.color = color
	this.name = String(name)
	this.position = parseInt(position)
}

Piece.moveTop = function(pos) {
	let move = []
	for(let i = (pos - 10); i >= 11; i -= 10) move.push(i)
	return move
}

Piece.moveBottom = function(pos) {
	let move = []
	for(let i = (pos + 10); i <= 88; i += 10) move.push(i)
	return move
}

Piece.moveRight = function(pos) {
	let move = []
	for(let i = (pos + 1); lastDigit(i) <= 8; i += 1) move.push(i)
	return move
}

Piece.moveLeft = function(pos) {
	let move = []
	for(let i = (pos - 1); lastDigit(i) >= 1; i -= 1) move.push(i)
	return move
}

Piece.moveBottomRight = function(pos) {
	let move = []
	for(let i = (pos + 11); i <= 88; i += 11) {
		move.push(i)
		if(firstDigit(i) === 8 || lastDigit(i) === 8) break
	}
	return move
}

Piece.moveBottomLeft = function(pos) {
	let move = []
	for(let i = (pos + 9); i <= 88; i += 9) {
		move.push(i)
		if(firstDigit(i) === 8 || lastDigit(i) === 1) break
	}
	return move
}

Piece.moveTopRight = function(pos) {
	let move = []
	for(let i = (pos - 9); i >= 11; i -= 9) {
		move.push(i)
		if(firstDigit(i) === 1 || lastDigit(i) === 8) break
	}
	return move
}

Piece.moveTopLeft = function(pos) {
	let move = []
	for(let i = (pos - 11); i >= 11; i -= 11) {
		move.push(i)
		if(firstDigit(i) === 1 || lastDigit(i) === 1) break
	}
	return move
}

const Rook = function(color, position) {
	Piece.call(this, color, 'rook', position)
	this.icon = '&#9820;'
	
	this.allowedMove = function() {
		let move = [
			...Piece.moveTop(this.position),
			...Piece.moveBottom(this.position),
			...Piece.moveRight(this.position),
			...Piece.moveLeft(this.position)
		]
		return move
	}
}

const Knight = function(color, position) {
	Piece.call(this, color, 'knight', position)
	this.icon = '&#9822;'
	
	this.allowedMove = function() {
		let move = [
			((this.position + 20) + 1),
			((this.position + 20) - 1),
			((this.position - 20) + 1),
			((this.position - 20) - 1),
			((this.position + 2) + 10),
			((this.position + 2) - 10),
			((this.position - 2) + 10),
			((this.position - 2) - 10)
		]
		move = move.filter(e => e >= 11 && e <= 88)
		move = move.filter(e => lastDigit(e) >= 1 && lastDigit(e) <= 8 ||
		firstDigit(e) >= 1 && firstDigit(e) <= 8)
		return move
	}
}

const Bishop = function(color, position) {
	Piece.call(this, color, 'bishop', position)
	this.icon = '&#9821;'
	
	this.allowedMove = function() {
		let move = [
			...Piece.moveTopRight(this.position),
			...Piece.moveBottomRight(this.position),
			...Piece.moveTopLeft(this.position),
			...Piece.moveBottomLeft(this.position)
		]
		return move
	}
}

const King = function(color, position) {
	Piece.call(this, color, 'king', position)
	this.icon = '&#9818;'
	
	this.allowedMove = function() {
		let move = []
		if(this.color === 0) {
			move.push(this.position - 10)
		} else {
			move.push(this.position + 10)
		}
		return move
	}
}

const Queen = function(color, position) {
	Piece.call(this, color, 'queen', position)
	this.icon = '&#9819;'
	
	this.allowedMove = function() {
		let move = [
			...Piece.moveTop(this.position),
			...Piece.moveBottom(this.position),
			...Piece.moveRight(this.position),
			...Piece.moveLeft(this.position),
			...Piece.moveTopRight(this.position),
			...Piece.moveBottomRight(this.position),
			...Piece.moveTopLeft(this.position),
			...Piece.moveBottomLeft(this.position)
		]
		return move
	}
}

const Pawn = function(color, position) {
	Piece.call(this, color, 'pawn', position)
	this.icon = '&#9823;'
	
	this.allowedMove = function() {
		let move = []
		if(this.color === 0) {
			let i = (this.position - 10)
			if(this.position >= 71) {
				move.push((i), (i - 10))
				return move
			}
			if(this.position <= 68) {
				move.push(i)
				return move
			}
		} else {
			let i = (this.position + 10)
			if(this.position <= 28) {
				move.push(i, (i + 10))
				return move
			}
			if(this.position >= 31) {
				move.push(i)
				return move
			}
		}
	}
}