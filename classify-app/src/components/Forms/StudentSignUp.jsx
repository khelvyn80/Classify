import React from "react";

export const StudentSignUp = () => {
	return (
		<>
			<form action="#">
				<div className="input-field">
					<label htmlFor="institutional-email">
						Institutional Email
					</label>
					<input
						type="email"
						name="institutional-email"
						id="institutional-email"
						required
					/>
				</div>
				<div className="input-field">
					<label htmlFor="invitation-code">Invitation Code</label>
					<input
						type="text"
						name="invitation-code"
						id="invitation-code"
						required
					/>
				</div>
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						required
					/>
				</div>
				<div className="input-field">
					<label htmlFor="confirm-password">Confirm Password</label>
					<input
						type="password"
						name="confirm-password"
						id="confirm-password"
						required
					/>
				</div>

				<button className="btn w-full p-3 send-btn">Sign Up</button>
			</form>
		</>
	);
};
