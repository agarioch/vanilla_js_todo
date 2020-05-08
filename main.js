function addItem(e) {
    e.preventDefault()
    const value = addTodo.querySelector('input[type="text"]').value
    let newItem = itemTemplate.content.cloneNode(true);
    let newItemText = newItem.querySelector('p');
    newItemText.textContent = value;
    todoList.append(newItem);
    addTodo.querySelector('input[type="text"]').value = ''
}

function deleteItem(e) {
    if(e.target.innerText == 'Delete') {
        const item = e.target.parentElement.parentElement;
        todoList.removeChild(item);
    }
}

// Delete items
const todoList = document.getElementById("todoList")
todoList.addEventListener("click",e => deleteItem(e))

// Add items
const itemTemplate = document.querySelector('#itemTemplate');
const addTodo = document.forms["newTodoForm"]
addTodo.addEventListener("submit", e => addItem(e))

// Search and filter
const searchTodo = document.forms["searchTodoForm"].querySelector('input');
searchTodo.addEventListener("keyup", e => {
    const searchText = e.target.value.toLowerCase();
    const items = todoList.querySelectorAll('li');
    Array.from(items).forEach(item => {
        const itemText = item.querySelector('p').textContent;
        if(itemText.toLowerCase().indexOf(searchText) == -1) {
            item.style.display = 'none';
        }
    })

})