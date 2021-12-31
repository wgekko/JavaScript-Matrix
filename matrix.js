var elemento = document.getElementById('matrix')
var ctx = elemento.getContext('2d')
var width = document.body.clientWidth
var height = document.body.clientHeight

elemento.width = width
elemento.height = height

var position = Array(300).join(0).split('')

function inicio_matrix(){
	ctx.fillStyle = 'rgba(0, 30, 1, 0.05)'
	ctx.fillRect(0, 0, width, height)
	ctx.fillStyle = '#37cc05'

	ctx.font = '12pt arial'

	position.map(function(y, index){
		let text = String.fromCharCode( Math.random() * 128)
		let x = (index * 20) + 20
		
		matrix.getContext('2d').fillText(text, x, y)

		if(y > 100 + Math.random() * 10000){
			position[index] = 0
		}else{
			position[index] = y + 15
		}
	})
}

setInterval(inicio_matrix, 50)





