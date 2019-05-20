/* global localStorage, TodoListItem, HTMLElement, customElements */

class TodoList extends HTMLElement {
  constructor () {
    super()
    this.addTodo = this.addTodo.bind(this)
  }

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
