import { useEffect, useState } from "react";
import searchIcon from "../assets/searching-data 1.svg";
import error500 from "../assets/500error.svg";
import { DisplayImage } from "../components/display/DisplayImage";
import { BottomNav } from "../components/nav/BottomNav";
import { CourseRepCard } from "../components/cards/CourseRepCard";
export const CourseRep = () => {
	const [courseReps, setCourseReps] = useState([]);
	const [error, setError] = useState(false);


	/**
	 * fetch the course reps from the server (localhost:3001/courses) and set the courseReps state.
	 * Uses json-server (dn.json) to mock a REST API
	 * @returns {Promise<void>}
	 */
	const fetchCourseReps = async () => {
		fetch("http://localhost:3001/courses")
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				return res.status;
			})
			.then((data) => {
				if (typeof data !== "object") {
					setError(true);
					// alert(error);
					return;
				}
				setCourseReps(data);
			})
			.catch((err) => {
				setError(true);
			});
	};



	useEffect(() => {
		fetchCourseReps();
	}, []);
	return (
		<div className="container">
			<div className="header">
				<h1>Course Reps</h1>
			</div>
			{error === true && courseReps.length === 0 && (
				<DisplayImage
					img={error500}
					displayText="OOPs! Something went wrong"
					btnText="Try Again"
					href="/course_rep"
				/>
			)}

			{
				// if the courseReps array is empty, display the DisplayImage component
				courseReps.length > 0 && error === false && (
					<div className="course-reps-container">
						{/*
						 * map through the courseReps array and pass the course code and reps to the CourseRepCard component
						 */}
						{courseReps.map((course) => (
							<CourseRepCard
								key={course.key}
								courseTitle={course.code}
								reps={course.reps}
							/>
						))}
					</div>
				)
			}
			{
				// if the courseReps array is empty, display the DisplayImage component
				courseReps.length === 0 && error === false &&  (
					<DisplayImage
						img={searchIcon}
						displayText="OOPs! It seems you haven't assigned any course rep yet"
						btnText="+ Add Course Rep"
						href="/add_course_rep"
					/>
				)
			}

			<BottomNav currentScreen="rep" />
		</div>
	);
};
