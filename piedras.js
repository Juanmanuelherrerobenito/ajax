function listaPiedras(){
var xhttp=new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200){
	var nombre=this.responseText;
	var lista_nombres=nombres.split(",");
	var obj_select=document.createElement("select");
	for(i=0; i<lista_nombres.length; i++)
		{
		var obj_option=document.createElement("option");
		obj_option.innerHTML=lista_nombres[i];
		obj_select.appendChild(obj_option);
		}
	document.getElementById("demo").appendChild(obj_select);
	}
};
xhttp.open("GET", "nombres.txt", true);
xhttp.send();
}