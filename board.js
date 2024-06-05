const board = document.getElementById('board')

const initBoard = function() {
	for(let i = 1; i <= 8; i++) {
		let div = document.createElement('div')
		div.classList.add('d-flex')
		for(let x = 1; x <= 8; x++) {
			let square = document.createElement('div')
			square.classList.add('square', 'fs-2', 'text-center')
			square.setAttribute('id', ''+i+x)
			square.style.width = '40px'
			square.style.height = '40px'
			square.style.backgroundColor = ((i+x) % 2 === 0) ? 'burlywood' : 'cornsilk'
			div.appendChild(square)
		}
		board.appendChild(div)
	}
}

const clearBoard = function() {
	const squares = document.querySelectorAll('.square')
	squares.forEach(function(square) {
		square.innerHTML = ''
	})
}

const updateBoard = function(pieces) {
	clearBoard()
	pieces.forEach(function(piece) {
		document.getElementById(piece.position).innerHTML = piece.icon
		if(piece.color === 0) {
			document.getElementById(piece.position).style.color = 'chocolate'
		} else {
			document.getElementById(piece.position).style.color = 'brown'
		}
	})
}

const startBoard = function(pieces) {
	initBoard.call()
	updateBoard(pieces)
}

const checkBoard = function(move) {
	for(const n of clickedPiece.allowedMove()) {
		document.getElementById(n).style.opacity = '0.5'
	}
}

const uncheckBoard = function(move) {
	for(const n of clickedPiece.allowedMove()) {
		document.getElementById(n).style.removeProperty('opacity')
	}
}