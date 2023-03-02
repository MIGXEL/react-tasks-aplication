import { useState, useEffect} from 'react'
import {tasks as data} from './tasks'
import TaskList from './TaskList'
import TaskForm from './TaskForm'

function App() {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		setTasks(data)
	}, [])

	function createTask(taskTitle){
		const newTask = {
			id: tasks.length,
			title: taskTitle,
			description: 'Nueva tarea'
		}
		setTasks([...tasks, newTask])
	}

	return (
		<>
			<TaskForm createTask={createTask}/>
			<TaskList tasks={tasks}/>
		</>
	)
}

export default App