/* global localStorage, TodoListItem, HTMLElement, customElements */

class TodoList extends HTMLElement {
  connectedCallback () {
    const todoList = JSON.parse(localStorage.getItem('todoList') || '[]')

    for (const todo of todoList) {
      this.addTodo(todo)
    }
  }

  addTodo (todo) {
    this.appendChild(new TodoListItem(todo))
  }
}

customElements.define('todo-list', TodoList)
