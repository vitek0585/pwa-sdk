var inps = document.querySelectorAll(".required");
var valu = inps[2].value;
var unvalid;
function validate(){
	var unv =[]
	for(var i = 0; i < inps.length; i ++){
		if (!inps[i].validity.valid){
			inps[i].style.border = '1px solid red';
			unv.push(inps[i])
		}
		else{
			unv.pop()
			inps[i].style.border = '1px solid #ccc';
		}
	}
	unvalid = unv;
	
}
function getResult(){
window.location.href = 'result.html'
}

var form = document.querySelector('#form');
form.addEventListener('submit', function (e){
	collectData();
	// getResult();
	e.preventDefault();
})

var sub = document.querySelector('#sub');
sub.addEventListener('click', validate);