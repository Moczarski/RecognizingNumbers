const pc1 = new draw(document.getElementById('p1'))
const pc2 = new draw(document.getElementById('p2'))
const pc3 = new draw(document.getElementById('p3'))

const nc1 = new draw(document.getElementById('n1'))
const nc2 = new draw(document.getElementById('n2'))
const nc3 = new draw(document.getElementById('n3'))

const ac1 = new draw(document.getElementById('a1'))
const ac2 = new draw(document.getElementById('a2'))
const ac3 = new draw(document.getElementById('a3'))

const bc1 = new draw(document.getElementById('b1'))
const bc2 = new draw(document.getElementById('b2'))
const bc3 = new draw(document.getElementById('b3'))

const cc1 = new draw(document.getElementById('c1'))
const cc2 = new draw(document.getElementById('c2'))
const cc3 = new draw(document.getElementById('c3'))

const dc1 = new draw(document.getElementById('d1'))
const dc2 = new draw(document.getElementById('d2'))
const dc3 = new draw(document.getElementById('d3'))

const ec1 = new draw(document.getElementById('e1'))
const ec2 = new draw(document.getElementById('e2'))
const ec3 = new draw(document.getElementById('e3'))

const fc1 = new draw(document.getElementById('f1'))
const fc2 = new draw(document.getElementById('f2'))
const fc3 = new draw(document.getElementById('f3'))

const gc1 = new draw(document.getElementById('g1'))
const gc2 = new draw(document.getElementById('g2'))
const gc3 = new draw(document.getElementById('g3'))

const hc1 = new draw(document.getElementById('h1'))
const hc2 = new draw(document.getElementById('h2'))
const hc3 = new draw(document.getElementById('h3'))

const gc = new draw(document.getElementById('g'))

const net = new brain.NeuralNetwork()

train.addEventListener('click', () => {
	
	const data = []

	data.push({ input: pc1.getVector(), output: {0: 1} })
	data.push({ input: pc2.getVector(), output: {0: 1} })
	data.push({ input: pc3.getVector(), output: {0: 1} })
	
	data.push({ input: nc1.getVector(), output: {1: 1} })
	data.push({ input: nc2.getVector(), output: {1: 1} })
	data.push({ input: nc3.getVector(), output: {1: 1} })
	
	data.push({ input: ac1.getVector(), output: {2: 1} })
	data.push({ input: ac2.getVector(), output: {2: 1} })
	data.push({ input: ac3.getVector(), output: {2: 1} })
	
	data.push({ input: bc1.getVector(), output: {3: 1} })
	data.push({ input: bc2.getVector(), output: {3: 1} })
	data.push({ input: bc3.getVector(), output: {3: 1} })
	
	data.push({ input: cc1.getVector(), output: {4: 1} })
	data.push({ input: cc2.getVector(), output: {4: 1} })
	data.push({ input: cc3.getVector(), output: {4: 1} })
	
	data.push({ input: dc1.getVector(), output: {5: 1} })
	data.push({ input: dc2.getVector(), output: {5: 1} })
	data.push({ input: dc3.getVector(), output: {5: 1} })
	
	data.push({ input: ec1.getVector(), output: {6: 1} })
	data.push({ input: ec2.getVector(), output: {6: 1} })
	data.push({ input: ec3.getVector(), output: {6: 1} })
	
	data.push({ input: fc1.getVector(), output: {7: 1} })
	data.push({ input: fc2.getVector(), output: {7: 1} })
	data.push({ input: fc3.getVector(), output: {7: 1} })
	
	data.push({ input: gc1.getVector(), output: {8: 1} })
	data.push({ input: gc2.getVector(), output: {8: 1} })
	data.push({ input: gc3.getVector(), output: {8: 1} })
	
	data.push({ input: hc1.getVector(), output: {9: 1} })
	data.push({ input: hc2.getVector(), output: {9: 1} })
	data.push({ input: hc3.getVector(), output: {9: 1} })

	const result = net.train(data, {log: true})
	
	err.innerHTML = result.error
	iterations.innerHTML = result.iterations
	res.removeAttribute('style')
	
})

recognize.addEventListener('click', () => {
	
	const result = brain.likely(gc.getVector(), net)
	
	document.getElementById('result').innerHTML = result
	gc.reset()
	
})