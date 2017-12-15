String.prototype.replaceAt=function(i, replacement) {
    return this.substr(0, i) + replacement+ this.substr(i + replacement.length);
}

function checkChecked(n){
	if(n==0){
		document.getElementById('commit').disabled=true;
	}else if(n==1){
		document.getElementById('commit').disabled=false;
	}
}

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
}

function isString(x) {
  return Object.prototype.toString.call(x) === "[object String]"
}

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

Array.prototype.exclude = function(list){
	return this.filter(function(el){return list.indexOf(el)<0;})
}

function copy(){

	new Clipboard('.btn', {
		text: function(trigger) {
			return seed;
		}
	});
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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