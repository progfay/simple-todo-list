/* global document, HTMLElement, customElements */

class TodoForm extends HTMLElement {
  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  connectedCallback () {
    const formTemplate = document.getElementById('todo-form-template')
    const form = formTemplate.content.cloneNode(true)
    form.querySelector('input#todo-input')
      .addEventListener('keydown', this.onSubmit, { once: false, passive: true })
    form.querySelector('button#add-button')
      .addEventListener('click', this.onSubmit, { once: false, passive: true })
    this.append(form)
  }

  disconnectedCallback () {
    this.querySelector('input#todo-input')
      .addEventListener('keydown', this.onSubmit, { once: false, passive: true })
    this.querySelector('button#add-button')
      .addEventListener('click', this.onSubmit, { once: false, passive: true })
  }

  onSubmit (event) {
    if (event.key && event.key !== 'Enter') return
    if (!this.input) this.input = this.querySelector('input#todo-input')
    if (!this.list) this.list = document.querySelector('todo-list#todo-list')
    if (!this.input || !this.list) return
    if (this.input.value === '') return
    this.list.addTodo({ text: this.input.value, checked: false }, false)
    this.input.value = ''
  }
}

customElements.define('todo-form', TodoForm)
