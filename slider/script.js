
var a = document.getElementsByClassName("slid")
var d = document.getElementsByClassName("dot")
var i = 0


function dot(){
  d[i].style.background = "gray";
  if (i!= i+-1 && i!= 0 && i!= 5) {
    d[i-1].style.background = "white";
    d[i+1].style.background = "white";
  }
  if (i == 0) {
    d[5].style.background = "white";
    d[i+1].style.background = "white";
  }
  if (i == 5) {
    d[0].style.background = "white"
    d[i-1].style.background = "white";}
}

function next(){
a[i].style.opacity = 0;
if (i < 5) {a[i+1].style.opacity  = 100;}
i++
if (i > 5) {a[0].style.opacity = 100; i = 0}
dot()
}

function prev(){
a[i].style.opacity  = 0;
if (i > 0){a[i-1].style.opacity  = 100;}
i--
if (i < 0) {a[5].style.opacity = 100; i = 5}
dot()
}
 function lightOff() {
for (i = 0; i<a.length; i++) 
  {
  a[i].style.opacity = 0;
  d[i].style.background = "white";}
  i = 0;

}

function dot1() {
lightOff()
i=0
a[i].style.opacity = 100;
d[i].style.background = "gray"
}

function dot2() {
lightOff()
i=1
a[i].style.opacity = 100;
d[i].style.background = "gray"
}

function dot3() {
lightOff()
i=2
a[i].style.opacity = 100;
d[i].style.background = "gray"
}

function dot4() {
lightOff()
i=3
a[i].style.opacity = 100;
d[i].style.background = "gray"
}

function dot5() {
lightOff()
i=4
a[i].style.opacity = 100;
d[i].style.background = "gray"
}

function dot6() {
lightOff()
i=5
a[i].style.opacity = 100;
d[i].style.background = "gray"
}



//авто переключение
setInterval(function() {next()}, 3000);