import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
	const defaultTask = {
		id: crypto.randomUUID(),
		title: "Learn React",
		description:
			"I want to learn React such that I can treat it like my slave and make it do whatever I want to do.",
		tags: ["web", "react", "js"],
		priority: "High",
		isFavorite: true,
	};

	const [tasks, setTasks] = useState([defaultTask]);
	const [showAllModal, setShoeAllModal] = useState(false);
	const [taskToUpdate, setTaskToUpdate] = useState(null);

	const handleAddEditTask = (newTask, isAdd) => {
		if (isAdd) {
			setTasks([...tasks, newTask]);
		} else {
			setTasks(
				tasks.map((task) => {
					if (task.id === newTask.id) {
						return newTask;
					}
					return task;
				})
			);
		}
		handleCloseModal();
	};

	const handleDeleteTask = (taskId) => {
		setTasks(tasks.filter((task) => task.id !== taskId));
	};

	const handleEditTask = (task) => {
		setShoeAllModal(true);
		setTaskToUpdate(task);
	};

	const handleCloseModal = () => {
		setShoeAllModal(false);
		setTaskToUpdate(null);
	};

	return (
		<section className="mb-20" id="tasks">
			{showAllModal && (
				<AddTaskModal
					onSave={handleAddEditTask}
					onClose={handleCloseModal}
					taskToUpdate={taskToUpdate}
				/>
			)}
			<div className="container">
				<SearchTask />
				<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
					<TaskAction onAddClick={() => setShoeAllModal(!showAllModal)} />
					<TaskList
						tasks={tasks}
						onEdit={handleEditTask}
						onDelete={handleDeleteTask}
					/>
				</div>
			</div>
		</section>
	);
};

export default TaskBoard;
