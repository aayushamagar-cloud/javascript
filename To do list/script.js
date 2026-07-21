function addTask() {
const newTask =document.createElement('li')
const tasklist = document.getElementById('taskList')
tasklist.appendChild(newTask)
newTask.textContent = document.getElementById('taskInput').value
document.getElementById('taskInput').value = ''

deleteTask(newTask);
}

    function deleteTask(newTask) {
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    newTask.appendChild(deleteButton)
    deleteButton.onclick = function () {
        newTask.remove()
    }
    }