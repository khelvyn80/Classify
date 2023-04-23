export const BottomNav = ({currentScreen}) => {
	return (
		<nav className="bottom-nav">
			<a
				href="?"
				className={`${(currentScreen === "dashboard" && "active")}`}>
				<span className="material-symbols-outlined">grid_view</span>
				Dashboard
			</a>
			<a
				href="?"
				className={`${(currentScreen === "feed" && "active")}`}>
				<span className="material-symbols-outlined">feed</span>
				Browse
			</a>
			<a
				href="?"
				className={`${(currentScreen === "rep" && "active")}`}>
				<span className="material-symbols-outlined">person</span>
				Reps
			</a>
		</nav>
	);
};
