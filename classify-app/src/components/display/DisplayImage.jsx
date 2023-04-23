import { Link } from "react-router-dom";

export const DisplayImage = ({
	img,
	displayHeading,
	displayText,
	btnText,
	href,
}) => {
	return (
		<div className="course-reps-contianer">
			<div className="display-msg">
				<div className="display-msg-img-container">
					<img
						src={img}
						alt="empty box"
					/>
				</div>
				<div className="display-msg-text">
					{displayHeading && <h2>{displayHeading}</h2>}
					<p>{displayText}</p>
				</div>
				<Link to={href} className="btn action-btn" > {btnText}</Link>
			</div>
		</div>
	);
};
