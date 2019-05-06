const input = document.getElementById('todo-input')
const button = document.getElementById('add-button')
const list = document.getElementById('todo-list')
const template = document.getElementById('todo-template')

const addTODO = (text) => {
  template.content.querySelector('div.todo-text').innerText = text
  const todo = document.importNode(template.content, true)
  todo.querySelector('button.delete-button')
    .addEventListener('click', event => {
      list.removeChild(event.target.parentNode)
    }, { once: true, passive: true })
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

for (const text of ['1st Task', '2nd Task', '3rd Task']) {
  addTODO(text)
}

input.focus()
