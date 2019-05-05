const input = document.getElementById('todo-input')
const button = document.getElementById('add-button')
const list = document.getElementById('todo-list')

const addTODO = () => {
  if (input.value === '') return
  const todo = document.createElement('li')
  todo.className = 'todo-list-item'
  todo.innerText = input.value
  list.appendChild(todo)
  input.value = ''
}

input.addEventListener('keydown', event => {
  if (event.key === 'Enter') addTODO(input.value)
})

button.addEventListener('click', addTODO)

input.focus()
