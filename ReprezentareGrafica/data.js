var n = 0, counter = 0;
var puncte = [];
window.onload = function() {
	document.getElementById("valid1").addEventListener("click", FunctiiValid1);
	document.getElementById("valid2").addEventListener("click", FunctiiValid2);
	document.getElementById("valid3").addEventListener("click", FunctiiValid3);
	document.getElementById("triang").addEventListener("click", Triang);
	
}

function Triang() {

	var canvas = document.getElementById("axe").getContext('2d');
	canvas.lineWidth = 1;
	canvas.strokeStyle = "#000000";
	for(var i = 4; i < 2 * n - 2; i = i + 2) {
		canvas.beginPath();
		canvas.moveTo(puncte[0], puncte[1]);
		canvas.lineTo(puncte[i], puncte[i + 1]);
		canvas.closePath();
		canvas.stroke();
	}
}


function FunctiiValid1() {

	var info = document.getElementsByName("nr_puncte")[0].value;
	n = info;
	document.getElementsByName("nr_puncte")[0].value = "";
}

function FunctiiValid2() {
	counter ++;
	var x = document.getElementsByName("ox")[0].value;
	var y = document.getElementsByName("oy")[0].value;
	
	puncte.push(x);
	puncte.push(150 - y);
	if (counter == n) {
		//desenezzzz
		var canvas = document.getElementById("axe").getContext('2d');
		canvas.beginPath();
		canvas.moveTo(puncte[0], puncte[1]);
		for (var i = 2; i < 2*n; i = i +2) {
			canvas.lineTo(puncte[i], puncte[i+1]);
		}
		canvas.lineWidth = 2;
		canvas.strokeStyle = "#000000";
		canvas.closePath();
		canvas.stroke();

	}
	document.getElementsByName("ox")[0].value = "";
	document.getElementsByName("oy")[0].value = "";
}

function FunctiiValid3() {
	var xa = document.getElementsByName("xA")[0].value;
	var ya = document.getElementsByName("yA")[0].value;
	var canvas = document.getElementById("axe").getContext('2d');
	canvas.fillStyle = "red";
	canvas.fillRect(xa,(150 - ya),1.5,1.5);
	document.getElementsByName("xA")[0].value = "";
	document.getElementsByName("yA")[0].value = "";
}