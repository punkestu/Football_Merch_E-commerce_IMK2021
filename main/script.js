var slotHarga = document.getElementById("harga");
var harga = 0;

slotHarga.innerHTML = "Rp."+harga;

var footage = document.getElementById("footages");
var pointer = document.getElementsByClassName("point");
var recent = -1;
var rs = 100;

function slideleft(){
	if(rs>0){
		rs += 100;
	}else{
		rs -= 200;
	}
	footage.style.left=""+rs+"vw";
}
function slideright(){
	if(rs==-200){
		rs = 0;
	}else{
		rs -= 100;
	}
	footage.style.left=""+rs+"vw";
}

function moveto(pos){
	rs=pos*(-100);
	footage.style.left=""+rs+"vw";
	pointer[0].classList.remove("pointed");
	pointer[1].classList.remove("pointed");
	pointer[2].classList.remove("pointed");
	pointer[pos].classList.toggle("pointed");
}

function autoslide(){
	slideright();
	pointer[0].classList.remove("pointed");
	pointer[1].classList.remove("pointed");
	pointer[2].classList.remove("pointed");
	pointer[rs/-100].classList.toggle("pointed");
	setTimeout(autoslide, 5000);
}

autoslide();

var items = document.getElementsByClassName("amount");
var total = 0;
var keranjang = document.getElementById("keranjang");
for (var i = 0; i < 16; i++) {
	total+=parseInt(items[i].innerHTML);
}

function add(i) {
	var angka = parseInt(items[i].innerHTML)+1;
	items[i].innerHTML=angka;
	total+=50000;
	document.getElementById("harga").innerHTML = "Rp."+total;
	keranjang.innerHTML = "";
	for (var j = 0; j < 16; j++) {
		amount = parseInt(items[j].innerHTML);
		if(amount>0){
			tag = document.createElement("h4");
			tag.innerHTML = "Jersey x "+amount;
			keranjang.appendChild(tag);
		}
	}
}
function sub(i) {
	var angka = parseInt(items[i].innerHTML)-1;
	if(angka<0){angka=0;}
	else{total-=50000;}
	items[i].innerHTML=angka;
	document.getElementById("harga").innerHTML = "Rp."+total;
	amount = parseInt(items[i].innerHTML);
	if(amount>0){
		tag = document.createElement("h1");
		tag.innerHTML = "Jersey";
		keranjang.appendChild(tag);
	}
}


var day = 15;
var second = 0;
var timer = document.getElementById("timer");
timer.innerHTML = "0:0:0"
function tick(){
	if(second == 0){
		day-=1;
		second = 3600*24-1;
	}else{
		second-=1;
	}
	timer.innerHTML = ""+day+":"+parseInt(second/3600)+":"+parseInt((second%3600)/60)+":"+parseInt((second%3600)%60);
	setTimeout(tick, 1000);
}

tick();