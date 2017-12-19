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
		
	}else if(pos>=0 && pos != seed.length){
		//the form pages
		
		document.getElementById('commitbar').innerHTML=commitbtn;
		document.getElementById('commitbar').setAttribute('class','commitbar-pos commitbar-active')
		
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
		document.getElementById('commitbar').innerHTML="";
		document.getElementById('commitbar').setAttribute('class','commitbar-pos')
		
		seedOut();
		
	}
	
	//changing opacity of navbar
	navopac();
	
}

//injecting formulars; 
function unwrap(str){
	try{
		if(isString(str[0])){
			document.getElementById("descHead").innerHTML=str[0];
			document.getElementById("embedding").innerHTML=buildform(str);
		}else{
			unwrap(str[seed.charAt(index-1)])
		}
	}catch(err){
		unwrap(str[seed.charAt(index-1)])
	}
}


//building formulars
function buildform(str){
	output="";
	
	for(i=1;i<str.length;i++){
		output+= "<input type='radio' name='topic' value=\""+str[i][2]+"\" onclick='checkChecked(1)'> <span class='boldify'>"+str[i][0]+"</span><br><div class='tabin'>"+str[i][1]+"</div>";
		if(i+1!=str.length){
			output+="<br><br>";
		}
	}
	return output;
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

//generating the strings for the last page and injects them
function seedOut(){
	
	//the two if blocks check if it is a valid seed
	if(seed.charAt(0)<n0.length-1 && seed.charAt(1)<n1[seed.charAt(0)].length-1 && seed.charAt(2)<n2.length-1 && seed.charAt(3)<n3.length-1 && seed.charAt(4)<n4[seed.charAt(3)].length-1 && seed.charAt(5)<n5.length-1 && seed.charAt(6)<n4[seed.charAt(5)].length-1){
		if(seed.charAt(0)>-1 && seed.charAt(1)>-1 && seed.charAt(2)>-1 && seed.charAt(3)>-1 && seed.charAt(4)>-1 && seed.charAt(5)>-1 && seed.charAt(6)>-1){
			//just for navbar purposes
			index=seed.length;
			
			outb="Your seed is: <span title='Copy to Clipboard'><button id='copy' class='btn inputs'>"+seed+"</button></span><div id='seedoutput'></div><br><br>These are the mods you can use without any limitations:<br><br>";
			outb2="<br>These are the mods you can learn from other players:<br><br>"
			
			//generating the header text
			outh="Let me repeat what you just told me, just to be sure I understood all of it.<br>You are a "+ n1[seed.charAt(0)][parseInt(seed.charAt(1))+1][0].toLowerCase()+ " " + n4[seed.charAt(3)][parseInt(seed.charAt(4))+1][0].toLowerCase() + " from "+ n2[parseInt(seed.charAt(2))+1][0].toLowerCase()+ ". You want to know more about what it is like to be";
			
			if(seed.charAt(5)==4){
				outh+= " an "+ n5[parseInt(seed.charAt(5))+1][0].toLowerCase()+". "
			}else{
				outh+= " a "+ n5[parseInt(seed.charAt(5))+1][0].toLowerCase() + " but aren't interested in the work of " + n6[parseInt(seed.charAt(5))][parseInt(seed.charAt(5))][0].toLowerCase()+"s. "
			}
			
			outh+="All of this is right? Damn my <span title='Pun completely intended'>memory</span> is good. Oh, there it is! That's the place your adventure will begin! I have to leave now, there are many other people in need of my leadership.<br> Good luck on Neonetima! May light shine in your darkest days!";
			
			know="";
			know2="";
			
			firstelement=0;
			//executes the convertation of the mixed mod-array into a simple string array
			for(i=0;i<seed.length;i++){
				if(i==0||i==2||i==3){
					
					temp=outbody[i][seed.charAt(i)].split(";");
					for(n=0; n< temp.length;n++){
						if(temp[n]!=""){
							if(firstelement==0){
								know+=temp[n];
								firstelement=1;
							}else{
								know+=", "+temp[n];
							}
						}
					}
				}else if(i==1||i==4){
					temp=outbody[i][seed.charAt(i-1)][seed.charAt(i)].split(";");
					for(n=0; n< temp.length;n++){
						if(temp[n]!=""){
							if(firstelement==0){
								know+=temp[n];
								firstelement=1;
							}else{
								know+=", "+temp[n];
							}
						}
					}
				}else if(i==5){
					firstelement=0;
					temp=outbody[3][seed.charAt(i)].split(";");
					for(n=0; n< temp.length;n++){
						if(temp[n]!=""){
							if(firstelement==0){
								know2+=temp[n];
								firstelement=1;
							}else{
								know2+=", "+temp[n];
							}
						}
					}
				}else if(i==6){
					for(n=0;n<outbody[4][seed.charAt(i-1)].length;n++){
						temp=outbody[4][seed.charAt(i-1)][n].split(";");
						
						for(j=0;j< temp.length;j++){
							if(temp[j]!=""){
								if(firstelement==0){
									know2+=temp[j];
									firstelement=1;
								}else{
									know2+=", "+temp[j];
								}
							}
						}
					}
					
					know2=know2.split(", ").filter(item => !know.split(", ").includes(item)).filter(item => !outbody[4][seed.charAt(i-1)][parseInt(seed.charAt(i))].split(";").includes(item)).unique();
				}
			}
			
			//had to do this because the player wouldn't be able to learn any adventurer skills
			if(n5[parseInt(seed.charAt(5))+1][0]=="Adventurer"){
				temp=outbody[4][seed.charAt(5)][seed.charAt(6)].split(";");
				know2=temp[0];
				for(j=1;j< temp.length;j++){
					if(temp[j]!=""){
						if(firstelement==0){
							know2+=temp[j];
							firstelement=1;
						}else{
							know2+=", "+temp[j];
						}
					}
				}
				
				know2 = know2.split(", ").unique();
			}
			
			//creates sorted arrays
			know=know.split(", ").unique().sort();
			know2=know2.sort();
			
			
			//building tables
			knowout1=maketabular(know)
			knowout2=maketabular(know2)
			
			// building table of free to use mods
			know=standard.split(";").sort().unique();
			knowout2+="<br><br><br>All characters can use:<br><br><table>"+maketabular(know);
			
			//combining into one variable
			outb+=knowout1+"<br><br>";
			outb+=outb2+knowout2;
			
			//injecting
			document.getElementById('descHead').innerHTML = outh;
			document.getElementById('embedding').innerHTML = outb;
			
			//creating the listener for the copy button
			document.getElementById('copy').addEventListener("click", function trigger() {
				copy();
			});
		}else{
			criticalerror();
		}
	}else{
		criticalerror();
	}
};

//iterates through the radio buttons and writes the value to the string
function writeseed(pos){
	a = document.getElementsByName('topic');
	for(i=0;i<a.length;i++){
		if(a[i].checked){
			seed=seed.replaceAt(pos,a[i].value);
		}
	}

}

//shared code between all table building stuff
function maketabular(put){
	ret="<table>";
	
	for(i=0;i<put.length;i++){
		if(i%3==0){
			if(put[i]!=="undefined"&&typeof put[i]!=="undefined"){
				ret+="<tr><td>"+put[i]+"</td>";
			}
		}else if(i%3==1){
			if(put[i]!=="undefined"&&typeof put[i]!=="undefined"){
				ret+="<td>"+put[i]+"</td>";
			}
		}else{
			if(put[i]!=="undefined"&&typeof put[i]!=="undefined"){
				ret+="<td>"+put[i]+"</td></tr>";
			}
		}
	}
	ret+="</table>"
	
	return ret
}

function criticalerror(){
	document.getElementById('descHead').innerHTML = "I'm sorry, something went terribly wrong.";
	document.getElementById('embedding').innerHTML = "Try reloading the page and try again. If the error reoccures, report the bug with a step by step guide of what you just did.<br><br> If you just injected some code, get lost.<br>";
}