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