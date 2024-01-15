import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import TaskBoard from "./task/TaskBoard";

const App = () => {
	return (
		<>
			<Header />
			<div className="container mx-auto">
				<Hero />
				<TaskBoard />
			</div>
			<Footer />
		</>
	);
};

export default App;
