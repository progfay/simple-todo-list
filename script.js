const input = document.getElementById('todo-input')
const button = document.getElementById('add-button')
const list = document.getElementById('todo-list')
const template = document.getElementById('todo-template')

const addTODO = (text) => {
  template.content.querySelector('div.todo-text').innerText = text
  const todo = document.importNode(template.content, true)
  list.appendChild(todo)
}

input.addEventListener('keydown', event => {
  if (event.key !== 'Enter') return
  if (input.value === '') return
  addTODO(input.value)
  input.value = ''
})

button.addEventListener('click', () => {
  if (input.value === '') return
  addTODO(input.value)
  input.value = ''
})

input.focus()
