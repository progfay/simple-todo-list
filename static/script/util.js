/* global localStorage */

window.generateID = () => Math.random().toString(36).substr(2, 10)

window.updateLocalStorage = update => {
  const todoList = localStorage.getItem('todoList')
  const updated = JSON.stringify(update(JSON.parse(todoList)))
  if (todoList === updated) return
  localStorage.setItem('todoList', updated)
}
