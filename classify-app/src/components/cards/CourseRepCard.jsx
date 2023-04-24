import { CourseRepDetails } from "../display/CourseRepDetails";

export const CourseRepCard = ({ courseTitle, reps }) => {
	return (
		<div className="course-card">
			<div className="card-title">
				<h3>{courseTitle}</h3>
			</div>
			<div className="card-body">
                {reps.map((rep) => (
                    <CourseRepDetails key={rep.id} repImg={rep.imgUrl} repName={rep.name} repRole={rep.role} />
                ))}
			</div>
		</div>
	);
};
