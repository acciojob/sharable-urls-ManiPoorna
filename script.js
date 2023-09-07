// your code here
const url = document.getElementById("url");
const addUrl = (e) => {
	e.preventDefault();
	let name = document.getElementById("name").value;
	let year = document.getElementById("year").value;
	if(name!=="" && year!== ""){
		url.innerText = `https://localhost:8080/name=${name}&year=${year}`
	}
	else if(name!=="" && year==""){
		url.innerText = `https://localhost:8080/name=${name}`
	}
	else if(name=="" && year!==""){
		url.innerText = `https://localhost:8080/year=${year}`
	}
	
}







