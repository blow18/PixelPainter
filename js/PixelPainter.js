window.onload = startProcess;

function PixelPainter(width, height) {
	var width = width;
	var height = height;

	this.getWidth = function() {
		return width;
	}
	this.setWidth = function(val) {
		width = val;
	}
	this.getHeight = function() {
		return height;
	}
	this.setHeight = function(val) {
		height = val;
	}

	this.getColumns = function() {
		return Math.floor(width / 30);
	}
	this.getRows = function() {
		return Math.floor(height / 30);
	}

}

function startProcess() {
	var pp = document.createElement("div");
	pp.id = "pp-canvas";
	document.getElementById("pixelPainter").appendChild(pp);

	for (var i = 0; i < 5; i++) {
		createRow(i);
	}

	var pixelP = new PixelPainter(500, 200);

	console.log(pixelP.getWidth());
	pixelP.width = 5;
	console.log(pixelP.getWidth());
	pixelP.setWidth(20)
	console.log(pixelP.getWidth());
}

function createRow(id) {
	var row = document.createElement("div");
	row.className = "row";
	row.id = id;
	document.getElementById("pp-canvas").appendChild(row);

	for (var i = 0; i < 20; i++) {
		var cell = document.createElement("div");
		cell.className = "cell";
		document.getElementById(id).appendChild(cell);
	}
}