/* global generateID, localStorage, TodoListItem, HTMLElement, customElements */

class TodoList extends HTMLElement {
  connectedCallback () {
    if (!('todoList' in localStorage)) {
      localStorage.setItem('todoList', JSON.stringify(
        [
          { id: generateID(), text: '1st Task', checked: false },
          { id: generateID(), text: '2nd Task', checked: false },
          { id: generateID(), text: '3rd Task', checked: false }
        ]
      ))
    }

    this.todoList = JSON.parse(localStorage.getItem('todoList'))

    for (const todo of this.todoList) {
      this.addTodo(todo)
    }
  }

  addTodo (todo) {
    this.appendChild(new TodoListItem(todo))
  }
}

customElements.define('todo-list', TodoList)
