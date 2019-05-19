/* global localStorage */

window.generateID = () => Math.random().toString(36).substr(2, 10)

window.controlLocalStorage = control => {
  const todoList = localStorage.getItem('todoList')
  const controled = JSON.stringify(control(JSON.parse(todoList)))
  if (todoList === controled) return
  localStorage.setItem('todoList', controled)
}
