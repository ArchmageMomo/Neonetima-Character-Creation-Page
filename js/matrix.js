function initialize(n){
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
		document.getElementById('embedding').innerHTML=eval("n" + n + ";");
		checkChecked(0);
	}else if(n==lastpage){
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	if(n>0){
		a = document.getElementsByName('topic');
		for(i=0;i<a.length;i++){
			if(a[i].value==fullseed.charAt(n-1)){
				a[i].checked=true;
			}
		}
	}
	
	if(atm==max && n!=0){
		max++;
		atm=max;
	}
}

function call(n){
	if(n==0){
		if(0!=atm){
			atm--;
			initialize(atm);
		}
	}else if (n==1){
		if(max!=atm){
			atm++;
			initialize(atm);
		}
	}
}

function callspecial(){
	writeseed(atm-1);
	if(atm==max){
		initialize(max+1);
	}else{
		initialize(atm);
	}
}


var max=0;
var atm=0;

var commitbtn= "<button id='commit' class='inputs'>Next</button>"











var n0="<button class='btn inputs' onclick=\"initialize(1)\">Start the character creation</button>\
<br><br>\
Do you already have a character-seed? Put it here: \
<input id='seedinput' class='inputs' placeholder='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' type='text' onkeydown = \"if (event.keyCode == 13) seedIn( document.getElementById('seedinput').value)\"></input>\
<button onclick=\"seedIn(document.getElementById('seedinput').value)\" class='btn inputs'>Process</button>";

var n1= "<input type='radio' name='topic' value='1' onclick='checkChecked(1)'> <span class='boldify'>Human</span><br><div class='tabin'>Just a puny human. Nothing special about you. Or is it?</div><br><br>\
<input type='radio' name='topic' value='2' onclick='checkChecked(1)'> <span class='boldify'>Fairy</div><div class='tabin'>Born in the woods. You naturaly look harmless, but don't forget there's magic in your blood.</div><br><br>\
<input type='radio' name='topic' value='3' onclick='checkChecked(1)'> <span class='boldify'>Demon</span><br><div class='tabin'>Is there anything to say about this?</div><br><br>";

var n2= "TODO"