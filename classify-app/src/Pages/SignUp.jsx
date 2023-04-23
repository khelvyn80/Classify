import { useState } from "react";
import { StudentSignUp } from "../components/Forms/StudentSignUp";
import { LecturerSignUp } from "../components/Forms/LecturerSignUp";
import "../components/Forms/form.css";

export const SignUp = () => {
	// Set the default role to student
	const [role, setRole] = useState("student");
	return (
		<div className="container">
			<div className="header">
				<h1>Create Account</h1>
				<div className="role-btns">
					<p>Role</p>
					<div className="btns">
						{/* Set role when buttons are clicked */}
						<button
							onClick={() => setRole("lecturer")}
							className={`${role === "lecturer" && "active"}`}>
							Lecturer
						</button>
						<button
							onClick={() => setRole("student")}
							className={`${role === "student" && "active"}`}>
							Student
						</button>
					</div>
				</div>
			</div>
			{
				// Render the appropriate form based on the role
				role === "student" ? <StudentSignUp /> : <LecturerSignUp />
			}
			<a href="?">Already have an account?</a>
		</div>
	);
};
