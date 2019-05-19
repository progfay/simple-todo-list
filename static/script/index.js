const inputElement = document.getElementById('todo-input')
const buttonElement = document.getElementById('add-button')
const listElement = document.getElementById('todo-list')

const onAddTodo = event => {
  if (event.key && event.key !== 'Enter') return
  if (inputElement.value === '') return
  listElement.addTodo({ text: inputElement.value, checked: false }, false)
  inputElement.value = ''
}

inputElement.addEventListener('keydown', onAddTodo)
buttonElement.addEventListener('click', onAddTodo)
