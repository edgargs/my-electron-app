
var table = document.getElementById('myTable');

var get = document.getElementById('btnRefresh');
get.addEventListener('click', () => {

	fetch(`http://localhost:8080/books`)
	.then(res => {
		console.log(res.status)
		return res.json()
	})
    .then(data => {
		// remove rows
		var myData = document.getElementById('myData');
		myData.innerHTML = "";

		for(i in data) {
			var row = myData.insertRow();
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			cell1.innerHTML = data[i].id;
			cell2.innerHTML = data[i].title;
			cell3.innerHTML = data[i].pages;
		}
	}).catch(err => console.log(err))

});

var post = document.getElementById('btnAdd');
post.addEventListener('click', () => {
	let newBook = { 
		title: "New book from Electron",
		pages: 350
	 };
	postData('http://localhost:8080/books', newBook)
	.then(data => {
		console.log(data); // JSON data parsed by `data.json()` call
	});
});

async function postData(url = '', data = {}) {
	// Opciones por defecto estan marcadas con un *
	const response = await fetch(url, {
	  method: 'POST', // *GET, POST, PUT, DELETE, etc.
	  mode: 'cors', // no-cors, *cors, same-origin
	  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	  credentials: 'same-origin', // include, *same-origin, omit
	  headers: {
		'Content-Type': 'application/json'
		// 'Content-Type': 'application/x-www-form-urlencoded',
	  },
	  redirect: 'follow', // manual, *follow, error
	  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
	  body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	console.log(response.status)
	return response.json(); // parses JSON response into native JavaScript objects
  }