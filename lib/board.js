function Board(pieces) {
	const root = document.getElementById('root')
	root.innerHTML = ''
	for(let i = 1; i <= 8; i++) {
		let div = document.createElement('div')
		div.setAttribute('class', 'd-flex')
		for(let x = 1; x <= 8; x++) {
			let square = document.createElement('div')
			square.setAttribute('class', 'fs-1 text-center')		
			square.setAttribute('id', ''+i+x)
			square.setAttribute('onclick', 'userClick(this)')
			square.style.width = '40px'
			square.style.height = '40px'
			square.style.backgroundColor = ((i+x) % 2 === 0) ? 'burlywood' : 'cornsilk'
			for(let p of pieces) {
				if((''+i+x) === String(p.pos)) {
					square.innerHTML = p.icon
				}
			}
			div.appendChild(square)
		}
		root.appendChild(div)
	}
}