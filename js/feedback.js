window.onscroll = function() {myFunction()};

var navbarsticky1 = document.getElementById("navbarsticky1");
var sticky = navbarsticky1.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbarsticky1.classList.add("sticky")
  } else {
    navbarsticky1.classList.remove("sticky");
  }
}


var list1 = [];
var list2 = [];
var list3 = [];

var n = 1;
var x = 0;

function AddRow(){

	var AddRown = document.getElementById('show');
	var NewRow = AddRown.insertRow(n);

	list1[x] = document.getElementById("fname").value;
	list2[x] = document.getElementById("skill").value;
	list3[x] = document.getElementById("level").value;

	var cel1 = NewRow.insertCell(0);
	var cel2 = NewRow.insertCell(1);
	var cel3 = NewRow.insertCell(2);

	cel1.innerHTML = list1[x];
	cel2.innerHTML = list2[x];
	cel3.innerHTML = list3[x];

	n++;
	x++;
}
