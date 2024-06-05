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
	new Pawn(1, 28)
]

startBoard(startPiece)

let clickedPiece = null

function userClick(el) {
	let id = parseInt(el.getAttribute('id'))
	
	if(!clickedPiece && hasPiece(id)) {
		clickedPiece = getPiece(id)
		checkBoard(clickedPiece.allowedMove())
		return
	}
	
	if(clickedPiece && hasClicked(id)) {
		uncheckBoard(clickedPiece.allowedMove())
		clickedPiece = null
		return
	}
	
	if(clickedPiece && isValidMove(id)) {
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

function hasClicked(id) {
	return id === clickedPiece.position
}

function getPiece(id) {
	return startPiece.filter(e => e.position === id)[0]
}

function isValidMove(id) {
	if(!hasPiece(id) && clickedPiece.allowedMove().includes(id)) {
		return true
	}
	return false
}