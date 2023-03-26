function clock()
{
	var clock=new Date();
	document.getElementById("clock").innerHTML=clock.toLocaleTimeString();
}
var x=setInterval(clock,1000)