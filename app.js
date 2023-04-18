// Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions

function addTodo(event) {
    // Prevent Form From Submitting
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create List
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Add Todo to Local Storage
    // saveLocalTodos(todoInput.value);
    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);
    //Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // Append to List
    todoList.appendChild(todoDiv);
    // Clear Todo Input Value
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    // Delete Todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        // Animation
       todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }
    // Check Mark
    if(item.classList[0] === 'completed-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

// Save to Local Storage Function
/* function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos === JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos))
} */