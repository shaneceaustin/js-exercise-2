var toDoList = document.querySelector('#to-do-list')
var userSubmit = document.querySelector('#user-submit') 

function addToDo(event) {
	event.preventDefault();
	
	var userInput = document.querySelector ('#user-input')
	

	if(userInput.value === ''){
		return false
	}

toDoList.innerHTML = '<li><i class="fa fa-square-o close-to-do" aria-hidden="true"></i> ' + userInput.value + '</li>' + toDoList.innerHTML;

userInput.value = '';

}
function removeToDo(event) {
	;
	if(event.target.classList.contains('close-to-do')){
	  var li = event.target.parentElement;
	  toDoList.removeChild(li);
	}
}

toDoList.addEventListener('click', removeToDo, false);

userSubmit.addEventListener('click', addToDo, false);



// <i class="fa fa-thumbs-up" aria-hidden="true">