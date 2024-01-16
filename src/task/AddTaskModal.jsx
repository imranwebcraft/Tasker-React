import { useState } from "react";

const AddTaskModal = ({ onSave, onClose }) => {
	const [addATask, setAddATask] = useState({
		id: crypto.randomUUID(),
		title: "",
		description: "",
		tags: [],
		priority: "",
		isFavorite: false,
	});

	const handleChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		if (name === "tags") {
			value = value.split(",");
		}

		setAddATask({
			...addATask,
			[name]: value,
		});
	};

	const handleTaskAdd = (e) => {
		e.preventDefault();
		onSave(addATask);
	};

	return (
		<>
			<div className=" z-10 absolute bg-black w-full h-screen inset-0 bg-opacity-60"></div>
			<form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-[0%] left-1/3">
				<h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
					Add New Task
				</h2>

				<div className="space-y-9 text-white lg:space-y-10">
					<div className="space-y-2 lg:space-y-3">
						<label htmlFor="title">Title</label>
						<input
							className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
							type="text"
							name="title"
							id="title"
							value={addATask.title}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="space-y-2 lg:space-y-3">
						<label htmlFor="description">Description</label>
						<textarea
							className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
							type="text"
							name="description"
							id="description"
							value={addATask.description}
							onChange={handleChange}
							required
						></textarea>
					</div>

					<div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
						<div className="space-y-2 lg:space-y-3">
							<label htmlFor="tags">Tags</label>
							<input
								className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
								type="text"
								name="tags"
								id="tags"
								value={addATask.tags}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="space-y-2 lg:space-y-3">
							<label htmlFor="priority">Priority</label>
							<select
								className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
								name="priority"
								id="priority"
								value={addATask.priority}
								onChange={handleChange}
								required
							>
								<option value="">Select Priority</option>
								<option value="Low">Low</option>
								<option value="Medium">Medium</option>
								<option value="High">High</option>
							</select>
						</div>
					</div>
				</div>

				<div className="mt-16 flex justify-center lg:mt-20">
					<button
						onClick={handleTaskAdd}
						type="submit"
						className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
					>
						Create new Task
					</button>
				</div>
				<div className="mt-16 flex justify-center lg:mt-20">
					<button
						onClick={onClose}
						type="button"
						className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
					>
						Close
					</button>
				</div>
			</form>
		</>
	);
};

export default AddTaskModal;
