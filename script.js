// your code here
const span = document.getElementById("span");
const addUrl = (e) => {
	e.preventDefault();
	let name = document.getElementById("name").value;
	let year = document.getElementById("year").value;
	if(name!=="" && year!== ""){
		span.innerText = `name=${name}&year=${year}`
	}
	else if(name!=="" && year==""){
		span.innerText = `name=${name}`
	}
	else if(name=="" && year!==""){
		span.innerText = `year=${year}`
	}
	
}







