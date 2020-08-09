function draw(el) {
	
	const pixel = 10
	const ctx = el.getContext('2d')
	let x = []
	let y = []
	let moves = []
	let isPainting = false

	const clear = () => ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

	const addPoint = (_x, _y, isMoving) => {
		
		x.push(_x)
		y.push(_y)
		moves.push(isMoving)
		
	}

	const redraw = () => {
		
		clear()

		ctx.strokeStyle = 'red'
		ctx.lineJoin = 'round'
		ctx.lineWidth = pixel

		for (let i = 0; i < moves.length; i++) {
			
			ctx.beginPath()
			
			if (moves[i] && i) {
				
				ctx.moveTo(x[i - 1], y[i - 1])
				
			} else {
				
				ctx.moveTo(x[i] - 1, y[i])
				
			}
			
			ctx.lineTo(x[i], y[i])
			ctx.closePath()
			ctx.stroke()
		}
		
	}

	this.reset = () => {
		
		isPainting = false
		x = []
		y = []
		moves = []
		clear()
		
	}

	this.getVector = () => {
		
		const w = el.clientWidth
		const h = el.clientHeight
		const p = el.clientWidth / pixel
		const xStep = w / p
		const yStep = h / p
		const vector = []
		
		for(let x = 0; x < w; x += xStep) {
			
			for(let y = 0; y < h; y += yStep) {
				
				const data = ctx.getImageData(x, y, xStep, yStep)

				let nonEmptyPixelsCount = 0
				
				for(let i = 0; i < data.data.length; i += 4) {
					
					const isEmpty = data.data[i] === 0
					
					if (!isEmpty) {
						
						nonEmptyPixelsCount += 1
						
					}
					
				}

				vector.push(nonEmptyPixelsCount > 1 ? 1 : 0)
				
			}
			
		}
		
		return vector
		
	}
	

	el.addEventListener('mousedown', event => {
		
		const bounds = event.target.getBoundingClientRect()
		const x = event.clientX - bounds.left
		const y = event.clientY - bounds.top
		isPainting = true
		addPoint(x, y, false)
		redraw()
		
	})

	el.addEventListener('mousemove', event => {
		
		const bounds = event.target.getBoundingClientRect()
		const x = event.clientX - bounds.left
		const y = event.clientY - bounds.top
		
		if (isPainting) {
			
			addPoint(x, y, true)
			redraw()
			
		}
		
	})

	el.addEventListener('mouseup', () => {isPainting = false})

	el.addEventListener('mouseleave', () => {isPainting = false})
}