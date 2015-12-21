
var numbers = [28,12,35,3,26,0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7];

function spin2win() {
	//####### disable buttons + inputs ###
	var t = 0;
	var btnz = document.getElementsByTagName('button');
	var inputs = document.getElementsByTagName('input');
	
	for (t = 0; t < btnz.length; t++) {
		btnz[t].disabled = true;
	}
	for (t = 0; t < inputs.length; t++) {
		inputs[t].disabled = true;
	}
	//####### add keyframes + random spin ###
	document.querySelector('.circle3 h4').innerHTML = '';
	var random = Math.floor(Math.random()*36);
	var deg = (random * 9.7297297297297297297297297297297) + 720;

	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = 'body {}';
	document.getElementsByTagName('head')[0].appendChild(style);
	this.stylesheet = document.styleSheets[document.styleSheets.length-1];
	var rule1 = '@keyframes ball-roll {100% {transform: rotate('+deg+'deg);}}';
	try {
		this.stylesheet.insertRule(rule1,this.stylesheet.rules.length);
	} catch (e) {};

	var elem = document.getElementById("path");
	var newone = elem.cloneNode(true);
	elem.parentNode.replaceChild(newone, elem);
	
	newone.style.animation = "ball-roll 10s ease-out";
	
	newone.addEventListener("animationend", wnumber);
	//####### bets ####
	var bets = 0;
	var winnings = 0;
	for (var k = 0; k < inputs.length; k++) {
		if (inputs[k].checked) {
			bets++;
			if (inputs[k].value == numbers[random]) {
				winnings = 35;
			}
		}	
	}
	var bank = document.querySelector('#bet span span');
	bank.innerHTML = parseInt(bank.textContent) - bets;
	//####### display winning number/add winnings/enable buttons + inputs ####
	function wnumber() {
		document.querySelector('.circle3 h4').innerHTML = numbers[random];
		bank.innerHTML = parseInt(bank.textContent) + winnings;
		
		for (t = 0; t < btnz.length; t++) {
			btnz[t].disabled = false;
		}
		for (t = 0; t < inputs.length; t++) {
			inputs[t].disabled = false;
		}
	}	
}

function checkall() {
	var inputs = document.getElementsByTagName('input');
	for (a in inputs) {
		inputs[a].checked = true;
	}
}

function uncheckall() {
	var inputs = document.getElementsByTagName('input');
	for (a in inputs) {
		inputs[a].checked = false;
	}
}







