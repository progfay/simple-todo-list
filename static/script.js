const inputElement = document.getElementById('todo-input')
const buttonElement = document.getElementById('add-button')
const listElement = document.getElementById('todo-list')
const template = document.getElementById('todo-template')

const addTODO = (text) => {
  template.content.querySelector('div.todo-text').innerText = text
  const todo = document.importNode(template.content, true)
  const deleteTODO = event => { listElement.removeChild(event.target.parentNode) }
  todo.querySelector('button.delete-button')
    .addEventListener('click', deleteTODO, { once: true, passive: true })
  listElement.appendChild(todo)
}

inputElement.addEventListener('keydown', event => {
  if (event.key !== 'Enter') return
  if (inputElement.value === '') return
  addTODO(inputElement.value)
  inputElement.value = ''
})

buttonElement.addEventListener('click', () => {
  if (inputElement.value === '') return
  addTODO(inputElement.value)
  inputElement.value = ''
})

for (const text of ['1st Task', '2nd Task', '3rd Task']) {
  addTODO(text)
}

inputElement.focus()
