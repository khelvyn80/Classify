import { Link } from "react-router-dom";

/**
 * @param {string} currentScreen - the current screen
 * @returns {JSX.Element}
 */
export const BottomNav = ({ currentScreen }) => {
	return (
		<nav className="bottom-nav">
			<Link
				to="/dashboard"
				className={`${currentScreen === "dashboard" && "active"}`}>
				<span className="material-symbols-outlined">grid_view</span>
				Dashboard
			</Link>
			<Link
				to="/browse"
				className={`${currentScreen === "browse" && "active"}`}>
				<span className="material-symbols-outlined">feed</span>
				Browse
			</Link>
			<Link
				to="/course_rep"
				className={`${currentScreen === "rep" && "active"}`}>
				<span className="material-symbols-outlined">person</span>
				Reps
			</Link>

		</nav>
	);
};
