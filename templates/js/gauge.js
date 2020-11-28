var canvas = document.getElementById("tutorial");
var ctx = canvas.getContext("2d");

var size = 3;



var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
        var i = xhttp.responseText;
	console.log(i);
	console.log(xhttp.readyState);
	console.log(xhttp.status);
	if(xhttp.readyState === XMLHttpRequest.DONE) {}
	else{
		return;
	}
	var status = xhttp.status;
	if (status === 0 || (status >= 200 && status < 400)) {}
    	else {
		return;
    	}


	if ("" == i) {
		return;
	}
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.arc( size*100, size*100, size*50, Math.PI*0.75, Math.PI *1.25, false);
	ctx.strokeStyle = 'lightgreen';
	ctx.lineWidth = size*10;
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc( size*100, size*100, size*50, Math.PI*1.25, Math.PI *1.75, false);
	ctx.strokeStyle = 'yellow';
	ctx.lineWidth = size*10;
	ctx.stroke();
	
	
	ctx.beginPath();
	ctx.arc( size*100, size*100, size*50, Math.PI*1.75, Math.PI *2.25, false);
	ctx.strokeStyle = 'red';
	ctx.lineWidth = size*10;
	ctx.stroke();
	
	
	
	ctx.beginPath();
	ctx.arc( size*100, size*100, size*5, 0, Math.PI *2, false);
	ctx.strokeStyle = 'black';
	ctx.lineWidth = size*1;
	ctx.fill();
	ctx.stroke();
	
	
	ctx.beginPath();
	ctx.moveTo(size*100, size*100);
	var ang = i-1.25; 
	ctx.lineTo(size*100 + size*50*Math.cos(Math.PI*ang), size*100 + size*50*Math.sin(Math.PI*ang));
	ctx.strokeStyle = 'black';
	ctx.lineWidth = size*1;
	ctx.stroke();
	
	ctx.textAlign = "center";
	ctx.font = `${size*10}px Arial`;
	ctx.fillText("Power (W)", size*100 + size*20*Math.cos(-Math.PI*0.50), size*100 + size*20*Math.sin(-Math.PI*0.50));
	ctx.fillText("0", size*100 + size*70*Math.cos(-Math.PI*1.25), size*100 + size*70*Math.sin(-Math.PI*1.25));
	ctx.fillText("50", size*100 + size*70*Math.cos(Math.PI*0.25), size*100 + size*70*Math.sin(Math.PI*0.25));

};
setInterval(function () {
	xhttp.onerror = function(e) {
		console.log(e);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.arc( size*100, size*100, size*50, Math.PI*0.75, Math.PI *1.25, false);
		ctx.strokeStyle = 'lightgray';
		ctx.lineWidth = size*10;
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc( size*100, size*100, size*50, Math.PI*1.25, Math.PI *1.75, false);
		ctx.strokeStyle = 'darkgray';
		ctx.lineWidth = size*10;
		ctx.stroke();
		
		
		ctx.beginPath();
		ctx.arc( size*100, size*100, size*50, Math.PI*1.75, Math.PI *2.25, false);
		ctx.strokeStyle = 'gray';
		ctx.lineWidth = size*10;
		ctx.stroke();
		
		
		
		ctx.beginPath();
		ctx.arc( size*100, size*100, size*5, 0, Math.PI *2, false);
		ctx.strokeStyle = 'black';
		ctx.lineWidth = size*1;
		ctx.fill();
		ctx.stroke();
		
		var i = 0;
		ctx.beginPath();
		ctx.moveTo(size*100, size*100);
		var ang = i-1.25; 
		ctx.lineTo(size*100 + size*50*Math.cos(Math.PI*ang), size*100 + size*50*Math.sin(Math.PI*ang));
		ctx.strokeStyle = 'black';
		ctx.lineWidth = size*1;
		ctx.stroke();
		
		ctx.textAlign = "center";
		ctx.font = `${size*10}px Arial`;
		ctx.fillText("Power (W)", size*100 + size*20*Math.cos(-Math.PI*0.50), size*100 + size*20*Math.sin(-Math.PI*0.50));
		ctx.fillText("0", size*100 + size*70*Math.cos(-Math.PI*1.25), size*100 + size*70*Math.sin(-Math.PI*1.25));
		ctx.fillText("50", size*100 + size*70*Math.cos(Math.PI*0.25), size*100 + size*70*Math.sin(Math.PI*0.25));
	};
        xhttp.open('GET', 'val1', true);
        xhttp.send();
}, 500);


