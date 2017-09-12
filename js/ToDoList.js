function addNewTask() {

	var li = document.createElement('li');
	var input = document.getElementById('myInput').value;
	var text = document.createTextNode(input);

	li.appendChild(text);

	var list = document.getElementById('myList');
	list.appendChild(li);
}