import { createContext } from "react";

const ModalContext = createContext();

/**
 * Component to display course rep details on course rep page
 * @param repImg - image of course rep
 * @param repName - name of course rep
 * @param repRole - role of course rep
 * @param onClick - function to be called when the more_vert button is clicked
 * @returns {JSX.Element}
 */
export const CourseRepDetails = ({ repImg, repName, repRole, onClick }) => {
	return (
		<ModalContext.Provider value={"text"}>
			<div className="rep-details">
				<div className="rep-bio-data">
					<div className="rep-img">
						<img
							src={repImg}
							alt={repName}
						/>
					</div>
					<div className="rep-bio">
						<small className="role">{repRole}</small>
						<p className="course-rep-name">{repName}</p>
					</div>
				</div>
				<button onClick={onClick}>
					<span className="material-symbols-outlined">more_vert</span>
				</button>
			</div>
		</ModalContext.Provider>
	);
};
