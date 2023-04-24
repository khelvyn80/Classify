
export const LecturerSignUp = () => {
	return (
		<>
			<form action="#">
				<div className="input-field">
					<label htmlFor="firstname">First Name</label>
					<input
						type="text"
						name="firstname"
						id="firstname"
						required
					/>
				</div>
				<div className="input-field">
					<label htmlFor="lastname">Last Name</label>
					<input
						type="text"
						name="lastname"
						id="lastname"
						required
					/>
				</div>
				<div className="input-field">
					<label htmlFor="staff-id">Staff ID</label>
					<input
						type="text"
						name="staff-id"
						id="staff-id"
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
