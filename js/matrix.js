function initialize(n){
	seedindex=n-1;
	if(n>0 && n < lastpage){
		document.getElementById('commitbar').innerHTML=commitbtn;
		document.getElementById('commitbar').setAttribute('class','commitbar-pos commitbar-active')
		
		document.getElementById('commit').addEventListener("click", function trigger() {
			callspecial();
		});
	}else{
		document.getElementById('commitbar').innerHTML="";
		document.getElementById('commitbar').setAttribute('class','commitbar-pos')
		
	}
	
	if(n==0){
		document.getElementById('embedding').innerHTML=n0;
		atm=0;
		}else if(n>0 && n<lastpage){
			a = document.getElementsByName('topic');
		val="";
		for(i=0;i<a.length;i++){
			if(a[i].checked){
				val=a[i].value.substring(0, a[i].value.length - 1);
			}
		}
		
		if(val>=0 && val<10){
			document.getElementById('embedding').innerHTML=buildform(n);
		}else{
			document.getElementById('embedding').innerHTML=buildsubform(val);
		}
		checkChecked(0);
	}else if(n==lastpage){
		//TODO
	}
	
	if(n>max){
		max++;
		atm=max;
	}
	
	if(n>0){
		a = document.getElementsByName('topic');
		for(i=0;i<a.length;i++){
			if(a[i].value==fullseed.charAt(n-1)){
				a[i].checked=true;
			}
		}
	}
	
	if(atm==0){
		document.getElementById('forward').style.opacity=0.4;
	}else{
		document.getElementById('forward').style.opacity=1;
	}
	if(max==atm){
		document.getElementById('backward').style.opacity=0.4;
	}else{
		document.getElementById('backward').style.opacity=1;
	}
}

function call(n){
	if(n==0){
		if(0!=atm){
			atm--;
			try{
				initialize(atm);
			}catch (err){
				atm--
				initialize(atm);
			}
		}
	}else if (n==1){
		if(max!=atm){
			atm++;
			try{
				initialize(atm);
			}catch (err){
				atm++;
				initialize(atm);
			}
		}
	}
}

function callspecial(){
	
	writeseed(seedindex);
	if(atm==max){
		initialize(max+1);
	}else{
		initialize(atm+1);
	}
}


var max=0;
var atm=0;
var seedindex=0;

var commitbtn= "<button id='commit' class='inputs'>Next</button>"


function buildform(n){
	eval("formar=n"+n+".split(';');");
	eval("formdes=d"+n+".split(';');");
	eval("formcount=c"+n+".split(';');");
	output="";
	
	for(i=0;i<formar.length;i++){
		output+= "<input type='radio' name='topic' value=\""+formcount[i]+"\" onclick='checkChecked(1)'> <span class='boldify'>"+formar[i]+"</span><br><div class='tabin'>"+formdes[i]+"</div>";
		if(i+1!=formar.length){
			output+="<br><br>";
		}
	}
	return output;
}

function buildsubform(n){
	eval("formar="+n+".split(';');");
	eval("formdes="+n+"d.split(';');");
	eval("formcount="+n+"c.split(';');");
	output="";
	
	for(i=0;i<formar.length;i++){
		output+= "<input type='radio' name='topic' value=\""+formcount[i]+"\" onclick='checkChecked(1)'> <span class='boldify'>"+formar[i]+"</span><br><div class='tabin'>"+formdes[i]+"</div>";
		if(i+1!=formar.length){
			output+="<br><br>";
		}
	}
	return output;
}
