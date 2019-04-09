const ENDPOINT =   "http://localhost:3000/tasks"

function getTasks() {
    return fetch(ENDPOINT)
    .then (resp => resp.json())
}

function createTask(task) {
    return fetch(ENDPOINT, {method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  }).then(resp => resp.json())
}
