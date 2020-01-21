/*
	[x] - Al pulsar en el botón #addBtnId se debe añadir lo que hay en el campo #titleInput.
	[x] - Tras el caso anterior, también se debe reiniciar el campo #titleInput para quedarse vacío.
	[x] - Ahora también quiero poder borrar un elemento de la lista, lo haremos añadiendo un botón dentro de cada uno de los <li>
		quedando de la siguiente manera: <li>Title <button type="button" class="close">x</button></li>.
		Este botón, tras ser pulsado debe eliminar dicho elemento.
	[x] - Queremos que tras pulsar un elemento <li> del listado, este se tache. Para que esto sea posible,
		tendremos que añadir la clase 'checked' al elemento <li>.
*/


//handle lista

const items = [];

function addList(event) {
	event.preventDefault();
	const input = document.getElementById("titleInput");
	const titleObject = {
		value: input.value,
		checked: false,
	};
	items.push(titleObject);
	//importante lo que hay que modificar es el valor
	input.value = '';
	paintList();
};


//pintar funcion
function paintList() {
	const listResult = document.querySelector(".list");


	let htmlCode = '';
	for (const item of items) {
		const index = items.indexOf(item);

		let classChecked = '';
		if (item.checked === true) {
			classChecked = "checked";
		}

		htmlCode += `<li class="list__item ${classChecked}">${item.value}<button type="button" data-index="${index}" class="close">x</button></li>`;
	}

	listResult.innerHTML = htmlCode;


	//listener elemento

	const removeButtons = document.querySelectorAll('.close');
	for (const removeButton of removeButtons) {
		removeButton.addEventListener('click', removeItem);
	}


	//listener items
	const liElements = document.querySelectorAll('.list__item');
	for (const liElement of liElements) {
		liElement.addEventListener('click', toogleItem);
	}

};


function toogleItem(event) {
	event.preventDefault();
	const index = event.currentTarget.firstElementChild.dataset.index;
	const itemSelected = items[index];
	console.log(itemSelected);
	console.log('entrooo');
	itemSelected.checked = !itemSelected.checked;
	paintList();
}






//handle elemento

function removeItem(event) {
	event.preventDefault();
	const index = event.currentTarget.dataset.index;
	items.splice(index, 1);
	paintList();
};




//listener lista
const addButton = document.querySelector('.addBtn');
addButton.addEventListener('click', addList);