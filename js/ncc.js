var fullseed='X';
var lastpage=10;

function findlastpage(){
	n=0;
	for(i=0; eval("n"+i);i++){
		n++;
	}
	lastpage=n;
}

function giveMeTop(){
	$("html, body").animate({ scrollTop: 0 }, "slow");
};

function seedIn(seed){
	fullseed=seed;
	seedOut();
};

function seedOut(){
	document.getElementById('embedding').innerHTML = fullseed;
};

function writeseed(pos){
	a = document.getElementsByName('topic');
	for(i=0;i<a.length;i++){
		if(a[i].checked){
			fullseed=fullseed.replaceAt(pos,a[i].value)
		}
	}

}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function checkChecked(n){
	if(n==0){
		document.getElementById('commit').disabled=true;
	}else if(n==1){
		document.getElementById('commit').disabled=false;
	}
}


