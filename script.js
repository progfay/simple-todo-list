const input = document.getElementById('todo-input')
const button = document.getElementById('add-button')
const list = document.getElementById('todo-list')

const addTODO = () => {
  if (input.value === '') return
  const todo = document.createElement('li')
  todo.className = 'todo-list-item'

  const content = document.createElement('div')
  content.className = 'todo-content'
  const checkbox = document.createElement('input')
  checkbox.className = 'todo-checkbox'
  checkbox.type = 'checkbox'
  const text = document.createElement('div')
  text.className = 'todo-text'
  text.innerText = input.value

  const deleteButton = document.createElement('button')
  deleteButton.className = 'delete-button'
  deleteButton.type = 'button'
  deleteButton.innerText = 'delete'

  content.appendChild(checkbox)
  content.append(text)
  todo.appendChild(content)
  todo.appendChild(deleteButton)

  list.appendChild(todo)
  input.value = ''
}

input.addEventListener('keydown', event => {
  if (event.key === 'Enter') addTODO(input.value)
})

button.addEventListener('click', addTODO)

input.focus()
