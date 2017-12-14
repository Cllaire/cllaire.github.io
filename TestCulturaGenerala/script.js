window.onload=function() {
	// Set Cronometru
	document.getElementById("Cronometru").innerHTML += "30:00";
	
	// Set Data
	var d = new Date();
	var ziua = d.getDate();
	var luna = d.getMonth();
	var an = d.getFullYear();
	var lunile_anului = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];

	var data_curenta = ziua + " ";
	for (let i = 0; i < 12; i++)
		if (i == luna) {
			data_curenta = data_curenta + lunile_anului[i];
			break;
		}
	data_curenta = data_curenta + " " + an;

	document.getElementById("Data").innerHTML = data_curenta;
	// End Set Data

	document.getElementById("ButonIncepeTestul").addEventListener("click", FunctiiButonIncepeTestul, true);
	document.getElementById("buton1").addEventListener("click", FunctiiButon1, true);
	document.getElementById("buton2").addEventListener("click", FunctiiButon2, true);
	document.getElementById("buton3").addEventListener("click", FunctiiButon3, true);
	document.getElementById("buton4").addEventListener("click", FunctiiButon4, true);
	document.getElementById("buton5").addEventListener("click", FunctiiButon5, true);
	document.getElementById("buton6").addEventListener("click", FunctiiButon6, true);
	document.getElementById("butonfinal").addEventListener("click", FunctiiButonFinal, true);
	document.getElementById("butonclasament").addEventListener("click", FunctiiButonClasament, true);

	drawPoly1();
	drawPoly2();
	drawPoly3();
	drawPoly4();
}

function drawPoly1() {
	var canvas = document.getElementById("Poly1").getContext('2d');
	canvas.fillStyle = '#957D95';
	canvas.beginPath();
	canvas.moveTo(100,30);
	canvas.lineTo(200,30);
	canvas.lineTo(250, 80);
	canvas.lineTo(200, 100);
	canvas.lineTo(100, 100);
	canvas.lineTo(50, 80);
	canvas.closePath();
	canvas.fill();
}

function drawPoly2() {
	var canvas = document.getElementById("Poly2").getContext('2d');
	canvas.fillStyle = '#904c77';
	canvas.beginPath();
	canvas.moveTo(30,20);
	canvas.lineTo(200,20);
	canvas.lineTo(200, 100);
	canvas.lineTo(30, 100);
	canvas.closePath();
	canvas.fill();
}

function drawPoly3() {
	var canvas = document.getElementById("Poly3").getContext('2d');
	canvas.fillStyle = '#7584AD';
	canvas.beginPath();
	canvas.moveTo(50,30);
	canvas.lineTo(270, 30);
	canvas.lineTo(240, 100);
	canvas.lineTo(20, 100);
	canvas.closePath();
	canvas.fill();
}

function drawPoly4() {
	var canvas = document.getElementById("Poly4").getContext('2d');
	canvas.fillStyle = '#314570';
	canvas.beginPath();
	canvas.moveTo(100,30);
	canvas.lineTo(280,30);
	canvas.lineTo(20, 140);
	canvas.closePath();
	canvas.fill();
}

var x;
function PornesteCronometrul(timp) {

	var cronometru = timp;
	var secunde_trecute = 0;
	
	x = setInterval(function() {
  		
  		secunde_trecute++;
  		var distanta = cronometru - secunde_trecute;
  		var minutes = Math.floor(distanta / 60);
  		var seconds = Math.floor(distanta % 60);
  		document.getElementById("Cronometru").innerHTML = minutes + ":" + seconds;
  		if (distanta == 0) {
    		clearInterval(x);
    		alert("Timpul a expirat!");
    		goToAnchor("Rezultat");
  		}
	}, 1000);
}

function goToAnchor(anchor) {
  var loc = document.location.toString().split('#')[0];
  document.location = loc + '#' + anchor;
  return false;
}

function FunctiiButonIncepeTestul() {
	PornesteCronometrul(1800);
	goToAnchor("Intrebarea1");
}

function FunctiiButon1() {
	goToAnchor("Intrebarea2");
}

function FunctiiButon2() {
	goToAnchor("Intrebarea3");
}

function FunctiiButon3() {
	goToAnchor("Intrebarea4");
}

function FunctiiButon4() {
	goToAnchor("Intrebarea5");
}

function FunctiiButon5() {
	goToAnchor("Intrebarea6");
}

function FunctiiButon6() {
	goToAnchor("Intrebarea7");
}

function FunctiiButonFinal() {
	/*modific chestii din rezultat*/
	//calculez raspunsuri corecte gresite, chestii, fac insert in clasament
	//(TODO @anarogoz)
	clearInterval(x);
	goToAnchor("Rezultat");
}

function FunctiiButonClasament() {
	goToAnchor("Clasament");
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
 }

function schimbafont() {
    var body = document.getElementsByTagName("body")[0];
    if(body.style.fontFamily == "Arial")
    	body.style.fontFamily = "Alice";
   	else
   		body.style.fontFamily = "Arial";
}
