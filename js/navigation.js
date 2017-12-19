
function initialize(pos){
	
	index=pos;
	//Setting the maximum of the navbar
	if(index>max){
		max=index;
	}
	
	//check which page to inject
	if(pos==-1){
		//landingpage
		document.getElementById("descHead").innerHTML=ni[0];
		document.getElementById("embedding").innerHTML=ni[1];
		
		document.getElementById('commitbar').innerHTML="";
		document.getElementById('commitbar').setAttribute('class','commitbar-pos')
		document.getElementById("issiutng").innerHTML="<span onclick='secret()' id='e'>SECRET</span>";
		
	}else if(pos>=0 && pos != seed.length){
		//the form pages
		
		document.getElementById('commitbar').innerHTML=commitbtn;
		document.getElementById('commitbar').setAttribute('class','commitbar-pos commitbar-active')
		document.getElementById("issiutng").innerHTML="";
		
		document.getElementById('commit').addEventListener("click", function trigger() {
			call(2);
		});
		
		//enabling/disabling forward button
		if(seed.charAt(index)=="X"){
			checkChecked(0);
		}else{
			checkChecked(1);
		}
		
		
		//writing the form-page
		try{
			unwrap(eval("n"+pos));
		}catch(err){
			console.log("No, you aren't allowed to do something stupid. Stop it already.");
			initialize(-1);
		}
		
	}else if(pos==seed.length){
		//output page
		document.getElementById("issiutng").innerHTML="";
		document.getElementById('commitbar').innerHTML="";
		document.getElementById('commitbar').setAttribute('class','commitbar-pos')
		
		seedOut();
		
	}
	
	//changing opacity of navbar
	navopac();
	
}

//initializes with starting page or next page (with seedwriting)
function call(i){
	if(i==2){
		writeseed(index);
		initialize(index+1)
	}else if(i==0){
		initialize(-1);
	}else{
		console.log("Stop trying to break this code pls. It's anoying me.");
	}
}


//just changes the opacity of the navbar icons and if they do their jobs
function navopac(){
	
	if( index>=max || talevalue==true){
		document.getElementById('forward').style.opacity=0.4;
		document.getElementById('forward').onclick="";
	}else{
		document.getElementById('forward').style.opacity=1;
		document.getElementById('forward').onclick=function(){initialize(index+1)};
	}
	if(index<0){
		document.getElementById('backward').style.opacity=0.4;
		document.getElementById('backward').onclick="";
	}else{
		document.getElementById('backward').style.opacity=1;
		document.getElementById('backward').onclick=function(){initialize(index-1)};
	}
	talevalue=false;
}



//iterates through the radio buttons and writes the value to the string
function writeseed(pos){
	a = document.getElementsByName('topic');
	for(i=0;i<a.length;i++){
		if(a[i].checked){
			seed=seed.replaceAt(pos,a[i].value);
		}
	}

}

//enables/disables the 'Next' button
function checkChecked(n){
	if(n==0){
		document.getElementById('commit').disabled=true;
	}else if(n==1){
		document.getElementById('commit').disabled=false;
	}
}