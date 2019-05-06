/* global localStorage */

const generateID = () => Math.random().toString(36).substr(2, 10)
const inputElement = document.getElementById('todo-input')
const buttonElement = document.getElementById('add-button')
const listElement = document.getElementById('todo-list')
const template = document.getElementById('todo-template')

const addTODO = (text, checked) => {
  const todo = document.importNode(template.content, true)

  const toggleCheck = event => {
    const { parentNode, checked } = event.target
    const id = parentNode.querySelector('input.todo-id').value
    const index = Array.from(listElement.children)
      .findIndex(child => child.querySelector('input.todo-id').value === id)
    const todoList = JSON.parse(localStorage.getItem('todoList'))
    todoList[index].checked = checked
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  const deleteTODO = event => {
    const { parentNode } = event.target
    const id = parentNode.querySelector('input.todo-id').value
    const index = Array.from(listElement.children)
      .findIndex(child => child.querySelector('input.todo-id').value === id)
    const todoList = JSON.parse(localStorage.getItem('todoList'))
    todoList.splice(index, 1)
    localStorage.setItem('todoList', JSON.stringify(todoList))
    parentNode.querySelector('input.todo-checkbox').removeEventListener('click', toggleCheck)
    listElement.removeChild(parentNode)
  }
  todo.querySelector('div.todo-text').innerText = text
  todo.querySelector('input.todo-checkbox').checked = checked
  todo.querySelector('input.todo-id').value = generateID()
  todo.querySelector('input.todo-checkbox')
    .addEventListener('click', toggleCheck, { once: false, passive: true })
  todo.querySelector('button.delete-button')
    .addEventListener('click', deleteTODO, { once: true, passive: true })
  listElement.appendChild(todo)
}

inputElement.addEventListener('keydown', event => {
  if (event.key !== 'Enter') return
  if (inputElement.value === '') return
  addTODO(inputElement.value, false)
  const todoList = JSON.parse(localStorage.getItem('todoList'))
  todoList.push({ text: inputElement.value, checked: false })
  localStorage.setItem('todoList', JSON.stringify(todoList))
  inputElement.value = ''
})

buttonElement.addEventListener('click', () => {
  if (inputElement.value === '') return
  addTODO(inputElement.value)
  const todoList = JSON.parse(localStorage.getItem('todoList'))
  todoList.push({ text: inputElement.value, checked: false })
  localStorage.setItem('todoList', JSON.stringify(todoList))
  inputElement.value = ''
})

if (!('todoList' in localStorage)) {
  localStorage.setItem('todoList', JSON.stringify(
    [
      { text: '1st Task', checked: false },
      { text: '2nd Task', checked: false },
      { text: '3rd Task', checked: false }
    ]
  ))
}

for (const { text, checked } of JSON.parse(localStorage.getItem('todoList'))) {
  addTODO(text, checked)
}
