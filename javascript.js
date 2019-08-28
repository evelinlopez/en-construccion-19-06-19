
	/*setear la fecha para la cuenta regresiva*/
	var fechaCuentaReg = new date("aug 1, 2019 00:00:00").getTime();
	/*ACTUALIZAR la cuenta regresiva cada segundo */
	var X = setInterval(function()	{
	 /*capturar la fecha y hora de hoy*/
   			var ahora = new date().getTime();
			/*encontrar la distancia ahora y la fecha limite de nuestra cuenta regresiva*/
			var distancia = fechaCuentaReg - ahora;
			/*calculo de tiempo para dias, horas, mienutos y segundos*/
			var dias = Math.floor(distancia/(1000*60*24));
			var horas = Math.floor((distancia % (1000*60*60*24))/(1000*60*60));
			var minutos = Math.floor((distancia % (1000*60*60))/(1000*60));
			var segundos = Math.floor((distancia % (1000*60))/1000);
			/*mostrar el resultado en in elemento con la id demo.id=demo*/
		document.getElementsByTagId("demo").InnerHTML =dias + "d "+ horas +"h "+ minutos +"m "+ segundos +"s ";
	/*si la cuenta regresiva termino, escribir una frase*/
	if (distancia<0) {
		clearInterval(x);
	document.getElementsByTagId("demo"),InnerHTML="expirado";	
	}
}
		




