//copied from the web, replaces a character of the string at the requested position
String.prototype.replaceAt=function(i, replacement) {
    return this.substr(0, i) + replacement+ this.substr(i + replacement.length);
}

//gets called on load, creates an invalid seed with the right length
function seedlength(){
	for(i=1;true;i++){
		try{
			eval("n"+i);
		}catch (err){
			i--;
			seed="";
			for(n=0;n<=i;n++){
				seed=seed.concat("X");
			}
			break;
		}
	}
	randinit()
}

//copied from the web, checks if an object is a string and returnes boolean
function isString(x) {
  return Object.prototype.toString.call(x) === "[object String]"
}

//copied from the web, deletes duplicates in an array
Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

//copys the seed to the users clipboard (to be later inserted with CTRL+V)
function copy(){
	new Clipboard('.btn', {
		text: function(trigger) {
			return seed;
		}
	});
}

//returns a random integer in range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//printing error message
function criticalerror(){
	document.getElementById('descHead').innerHTML = "I'm sorry, something went terribly wrong.";
	document.getElementById('embedding').innerHTML = "Try reloading the page and try again. If the error reoccures, report the bug with a step by step guide of what you just did.<br><br> If you just injected some code, get lost.<br>";
	index=-1;
	max=-1;
	navopac();
}

//placement of something i forgot
function randinit(){
	document.getElementById("issiutng").style.top=getRandomInt(80,100)+'%';
	document.getElementById("issiutng").style.left=getRandomInt(0,10)+'%';
	document.getElementById("issiutng").style.height='5%';
	document.getElementById("issiutng").style.width='5%';
}