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

//simple randomizer for the seed.
function randomize(){
	ret=""
	ret+=getRandomInt(0,n0.length-2);
	ret+=getRandomInt(0,n1[ret.charAt(0)].length-2);
	ret+=getRandomInt(0,n2.length-2);
	ret+=getRandomInt(0,n3.length-2);
	ret+=getRandomInt(0,n4[ret.charAt(3)].length-2);
	ret+=getRandomInt(0,n5.length-2);
	ret+=getRandomInt(0,n6[ret.charAt(5)].length-2);
	seed=ret;
	initialize(seed.length)
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

//No description here
function aTrueMage(){
	document.getElementById('descHead').innerHTML = "Oh, you found it! Didn't expect that~~~<br><br>You probably want some kind of reward for finding this, don't you? But first of all, please promise me to never tell anyone about this. You can tell them that you found something, but please never tell them what you found where. Good? Good. <br><br><button class='btn' style='position:center' onclick='aTale()'>I promise not to tell anyone.</button>";
}

//Also no description here
function aTale(){
	document.getElementById('descHead').innerHTML = taleon;
	document.getElementById('embedding').innerHTML = "";
	document.getElementById('commitbar').innerHTML="";
	document.getElementById('commitbar').setAttribute('class','commitbar-pos')
	index+=1;
	talevalue=true;
	navopac();
}