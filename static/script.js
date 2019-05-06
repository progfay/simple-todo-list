/* global localStorage */

const generateID = () => Math.random().toString(36).substr(2, 10)
const inputElement = document.getElementById('todo-input')
const buttonElement = document.getElementById('add-button')
const listElement = document.getElementById('todo-list')
const template = document.getElementById('todo-template')

const controlLocalStorage = control => {
  const todoList = JSON.parse(localStorage.getItem('todoList'))
  control(todoList)
  localStorage.setItem('todoList', JSON.stringify(todoList))
}

const getTodoIndex = id => {
  return Array.from(listElement.children)
    .findIndex(child => child.querySelector('input.todo-id').value === id)
}

const toggleCheck = event => {
  const { parentNode, checked } = event.target
  const id = parentNode.querySelector('input.todo-id').value
  const index = getTodoIndex(id)
  controlLocalStorage(todoList => { todoList[index].checked = checked })
}

const deleteTodo = event => {
  const { parentNode } = event.target
  const id = parentNode.querySelector('input.todo-id').value
  const index = getTodoIndex(id)
  controlLocalStorage(todoList => { todoList.splice(index, 1) })
  parentNode.querySelector('input.todo-checkbox').removeEventListener('click', toggleCheck)
  listElement.removeChild(parentNode)
}

const addTodo = ({ text, checked }) => {
  const todo = document.importNode(template.content, true)
  todo.querySelector('div.todo-text').innerText = text
  todo.querySelector('input.todo-checkbox').checked = checked
  todo.querySelector('input.todo-id').value = generateID()
  todo.querySelector('input.todo-checkbox')
    .addEventListener('click', toggleCheck, { once: false, passive: true })
  todo.querySelector('button.delete-button')
    .addEventListener('click', deleteTodo, { once: true, passive: true })
  listElement.appendChild(todo)
}

const onAddTodo = event => {
  if (event.key && event.key !== 'Enter') return
  if (inputElement.value === '') return
  addTodo(inputElement.value, false)
  controlLocalStorage(todoList => { todoList.push({ text: inputElement.value, checked: false }) })
  inputElement.value = ''
}

inputElement.addEventListener('keydown', onAddTodo)
buttonElement.addEventListener('click', onAddTodo)

if (!('todoList' in localStorage)) {
  localStorage.setItem('todoList', JSON.stringify(
    [
      { text: '1st Task', checked: false },
      { text: '2nd Task', checked: false },
      { text: '3rd Task', checked: false }
    ]
  ))
}

JSON.parse(localStorage.getItem('todoList')).forEach(addTodo)
