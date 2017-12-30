var nume, prenume;
var jucator;
var scor;
var raspunsuri_corecte = 0, raspunsuri_gresite = 0;
var gasit = -1;
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

	if(localStorage.count) 
		localStorage.count ++;
	else
		localStorage.count = 1;

	document.getElementById("ButonIncepeTestul").addEventListener("click", FunctiiButonIncepeTestul);
	document.getElementById("buton1").addEventListener("click", FunctiiButon1);
	document.getElementById("buton2").addEventListener("click", FunctiiButon2);
	document.getElementById("buton3").addEventListener("click", FunctiiButon3);
	document.getElementById("buton4").addEventListener("click", FunctiiButon4);
	document.getElementById("buton5").addEventListener("click", FunctiiButon5);
	document.getElementById("buton6").addEventListener("click", FunctiiButon6);
	document.getElementById("butonfinal").addEventListener("click", FunctiiButonFinal);
	document.getElementById("butonclasament").addEventListener("click", FunctiiButonClasament);
	document.getElementById("NrJucatori").innerHTML = "Testul a fost dat de " + localStorage.count + " persoane.";

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

function StergeJucator() {
	var clasament = document.getElementById("Clasament"); 
	clasament.removeChild(clasament.children[gasit + 1]);
}

var x;
var distanta;
function PornesteCronometrul(timp) {

	var cronometru = timp;
	var secunde_trecute = 0;
	
	x = setInterval(function() {
  		
  		secunde_trecute++;
  		distanta = cronometru - secunde_trecute;
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

	clearInterval(x);
	goToAnchor("Rezultat");
	var ratio = 0;
	var distanta_jucator = 1800 - distanta;

	var vector_raspunsuri_corecte = document.querySelectorAll(".RaspunsCorect");
	for (let i = 0; i < vector_raspunsuri_corecte.length; i ++)
		if (vector_raspunsuri_corecte[i].checked == true)
			raspunsuri_corecte ++;
	// Verific raspunsul intrebarii cu dropdown
	var vector_casute = document.getElementById("Casute");
	var vector_elemente_casute = vector_casute.getElementsByTagName("div");
	var ok = true;
	for (let i = 0; i < vector_elemente_casute.length; i = i + 2) {
		var eveniment_istoric = vector_elemente_casute[i].querySelector("div");
		var nume = "Evenimentul" + (i/2+1);
		if (eveniment_istoric.id != nume)
			ok = false;
	}
	if (ok == true)
		raspunsuri_corecte ++;
	else 
		raspunsuri_gresite ++;

	var vector_raspunsuri_gresite = document.querySelectorAll(".RaspunsGresit");
	for (let i = 0; i < vector_raspunsuri_gresite.length; i++)
		if (vector_raspunsuri_gresite[i].checked == true)
			raspunsuri_gresite ++;
	var vector_statistici = (document.getElementById("Statistici")).querySelectorAll("li");
	vector_statistici[0].innerHTML = "Raspunsuri corecte: " + raspunsuri_corecte;
	vector_statistici[1].innerHTML = "Raspunsuri gresite: " + raspunsuri_gresite;
	ratio = raspunsuri_corecte / (raspunsuri_gresite + raspunsuri_corecte);
	scor = (raspunsuri_corecte * 100) - (raspunsuri_gresite * 50);
	vector_statistici[2].innerHTML = "Acuratete raspunsuri: " + (parseFloat(ratio).toFixed(2)) * 100 + "%";
	vector_statistici[3].innerHTML = "Scor: " + scor;
	vector_statistici[4].innerHTML = "Timp test: " + distanta_jucator + " secunde";
	
}

function setNume() {
	var nume_complet = document.getElementById("DatePersonale");
	jucator = nume_complet.getElementsByTagName("input");
	prenume = jucator[0].value + " ";
	nume = jucator[1].value;
}

function FunctiiButonClasament() {
	goToAnchor("Clasament");
	setNume();
	var clasament = document.getElementById("Clasament");
	var divuri_clasament = Array.prototype.slice.call(clasament.querySelectorAll("div"));
	
	var jucator_div = document.createElement("div");
	jucator_div.className = "Persoana";
	var p1 = document.createElement("p");
	var nume_complet = prenume.concat(nume);
	p1.innerHTML = nume_complet;
	p1.className = "Nume";
	jucator_div.appendChild(p1);
	var p2 = document.createElement("p");
	p2.innerHTML = scor;
	jucator_div.appendChild(p2);

	for (let i = 0; i < divuri_clasament.length; i++) {
		var scor_curent = (divuri_clasament[i].getElementsByTagName("p"))[1].innerHTML;
		if (scor_curent < scor && gasit == -1) {
			gasit = i;
			divuri_clasament.splice(i, 0, jucator_div);
		}
	}

	if(gasit == -1) {
		divuri_clasament.push(jucator_div);
		gasit = divuri_clasament.length - 1;
	}

	for (var i = 1; i < clasament.length; i++)
		clasament.removeChild(clasament.children[i]);
	for (var i = 0; i < divuri_clasament.length; i++)
		clasament.appendChild(divuri_clasament[i]);
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
