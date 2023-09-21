//your code here
const input  = document.getElementById("evaluatedText");
const h3 = document.getElementById("letterCount");

let num = 1;
input.addEventListener("keydown",(event)=>{
	const key = event.key;
	if(key === "Backspace" && num !== 0){
		h3.innerText = num;
		num--;
	}
	else{
		
		h3.innerText = num;
		num++;
	}
})