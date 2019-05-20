/* global localStorage, TodoListItem, HTMLElement, customElements */

class TodoList extends HTMLElement {
  constructor () {
    super()
    this.addTodo = this.addTodo.bind(this)
  }

  connectedCallback () {
    JSON.parse(localStorage.getItem('todoList') || '[]')
      .forEach(todo => this.addTodo(todo))
  }

  addTodo (todo) {
    this.appendChild(new TodoListItem(todo))
  }
}

customElements.define('todo-list', TodoList)
