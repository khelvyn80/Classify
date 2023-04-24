import { Link } from "react-router-dom";
import { AddCourseRep } from "../components/Forms/AddCourseRep";

export const AddCourseRepPage = () => {
	return (
		<div className="container">
			<div className="header" style = {{marginBottom: '1.5rem'}} >
			<Link
				to="/course_rep"
				className="back-btn">
				<span className="material-symbols-outlined">arrow_back_ios</span>
			</Link>
				<h1>Assign Course Rep</h1>
			</div>
			<AddCourseRep />
		</div>
	);
};
