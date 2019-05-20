/* global generateID, updateLocalStorage, HTMLElement, customElements */

const template = document.getElementById('todo-template').content

class TodoListItem extends HTMLElement {
  constructor ({ id = generateID(), text = '', checked = false }) {
    super()
    this.id = id
    this.text = text
    this.checked = checked
    this.toggleCheck = this.toggleCheck.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  connectedCallback () {
    const { id, text, checked } = this

    const todo = template.cloneNode(true)
    const textNode = document.createTextNode(text)
    todo.querySelector('div.todo-text').appendChild(textNode)
    todo.querySelector('input.todo-checkbox').checked = checked
    todo.querySelector('input.todo-checkbox')
      .addEventListener('click', this.toggleCheck, { once: false, passive: true })
    todo.querySelector('button.delete-button')
      .addEventListener('click', this.deleteTodo, { once: true, passive: true })
    this.append(todo)

    updateLocalStorage(todoList => {
      if (!todoList.find(todo => todo.id === id)) {
        todoList.push({ id, text, checked })
      }
      return todoList
    })
  }

  disconnectedCallback () {
    this.querySelector('input.todo-checkbox')
      .removeEventListener('click', this.toggleCheck)
  }

  toggleCheck () {
    this.checked = !this.checked
    this.querySelector('input.todo-checkbox').checked = this.checked
    updateLocalStorage(todoList =>
      todoList.map(todo => {
        if (todo.id === this.id) todo.checked = this.checked
        return todo
      })
    )
  }

  deleteTodo (event) {
    this.remove()
    updateLocalStorage(todoList =>
      todoList.filter(todo => todo.id !== this.id)
    )
  }
}

customElements.define('todo-list-item', TodoListItem)
