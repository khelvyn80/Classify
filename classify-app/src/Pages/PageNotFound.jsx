import error404 from "../assets/404error.svg";
import { DisplayImage } from "../components/display/DisplayImage";

export const PageNotFound = () => {
	return (
		<div className="contianer">
			<DisplayImage
				img={error404}
				displayText="Page Not Found"
				btnText="Home"
				href="/"
			/>
		</div>
	);
};
