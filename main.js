let startPiece = [
	new Rook(1, 11),
	new Knight(1, 12),
	new Bishop(1, 13),
	new King(1, 14),
	new Queen(1, 15),
	new Bishop(1, 16),
	new Knight(1, 17),
	new Rook(1, 18),
	new Pawn(1, 21),
	new Pawn(1, 22),
	new Pawn(1, 23),
	new Pawn(1, 24),
	new Pawn(1, 25),
	new Pawn(1, 26),
	new Pawn(1, 27),
	new Pawn(1, 28),
	new Pawn(0, 71),
	new Pawn(0, 72),
	new Pawn(0, 73),
	new Pawn(0, 74),
	new Pawn(0, 75),
	new Pawn(0, 76),
	new Pawn(0, 77),
	new Pawn(0, 78),
	new Rook(0, 81),
	new Knight(0, 82),
	new Bishop(0, 83),
	new Queen(0, 84),
	new King(0, 85),
	new Bishop(0, 86),
	new Knight(0, 87),
	new Rook(0, 88)
]

startBoard(startPiece)

const squares = document.querySelectorAll('.square')
squares.forEach(function(square) {
	square.addEventListener('click', handleClick)
})

let clickedPiece = null 

function handleClick(el) {
	let id = parseInt(el.target.getAttribute('id'))
	
	if(!clickedPiece && hasPiece(id)) {
		clickedPiece = getPiece(id)
		checkBoard(clickedPiece.allowedMove())
		return
	}
	
	if(clickedPiece && hasClick(id)) {
		uncheckBoard(clickedPiece.allowedMove())
		clickedPiece = null
		return
	}
	
	if(clickedPiece && isMove(id)) {
		uncheckBoard(clickedPiece.allowedMove())
		clickedPiece.position = id
		updateBoard(startPiece)
		clickedPiece = null 
		return
	}
}

function hasPiece(id) {
	let i = startPiece.findIndex(e => e.position === id)
	if(i > -1) return true 
	return false
}

function getPiece(id) {
	return startPiece.filter(e => e.position === id)[0]
}

function hasClick(id) {
	return id === clickedPiece.position
}

function isMove(id) {
	if(!hasPiece(id) && clickedPiece.allowedMove().includes(id)) {
		return true
	}
	return false
}

function isKill(id) {
	
}