import { useState } from "react";
import img from "../assets/searching-data 1.svg";
import { DisplayImage } from "../components/display/DisplayImage";
import { BottomNav } from "../components/nav/BottomNav";
export const CourseRep = () => {
	const [courseReps, setCourseReps] = useState({
		course: [
			{
				code: "CSC 102",
				title: "Introduction to Computer Science",
				reps: [
					{
						name: "John Doe",
						imgUrl: "",
						role: "Main Course Rep",
					},
					{
						name: "Jane Doe",
						imgUrl: "",
						role: "Deputy Course Rep",
					},
				],
			},
			{
				code: "CSC 202",
				title: "Data Structures and Algorithms",
				reps: [
					{
						name: "John Doe",
						imgUrl: "",
						role: "Main Course Rep",
					},
					{
						name: "Jane Doe",
						imgUrl: "",
						role: "Deputy Course Rep",
					},
				],
			},
		],
	});
	return (
		<div className="container">
			<div className="header">
				<h1>Course Reps</h1>
			</div>

			{courseReps.length === 0 ? (
				<DisplayImage
					img={img}
					displayText="OOPs! It seems you haven't assigned any course rep yet"
					btnText="+ Add Course Rep"
					href="/add_course_rep"
				/>
			) : (
				<div className="course-reps-container">
					<div className="course-card">
						<div className="card-title">
							<h3>CSC 102</h3>
						</div>
						<div className="card-body">
							<div className="rep-details">
								<div className="rep-img"></div>
								<div className="rep-bio">
									<small className="role">
										Main Course Rep
									</small>
								</div>
							</div>
							<span className="material-symbols-outlined">
								more_vert
							</span>
						</div>
					</div>
				</div>
			)}

			<BottomNav currentScreen="rep" />
		</div>
	);
};
