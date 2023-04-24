import { Link } from "react-router-dom";

/**
 * @param {string} img - the image to be displayed
 * @param {string} displayHeading - the heading to be displayed
 * @param {string} displayText - the text to be displayed
 * @param {string} btnText - the text to be displayed on the button
 * @param {string} href - the href to be passed to the button
 * @returns {JSX.Element}
 */
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
				{btnText && (
					<Link to={href} className="btn action-btn" > {btnText}</Link>
				)}
			</div>
		</div>
	);
};
