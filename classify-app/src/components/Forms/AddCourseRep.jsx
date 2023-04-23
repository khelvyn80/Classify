export const AddCourseRep = () => {
	return (
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
				<label htmlFor="index-number">Index Number</label>
				<input
					type="text"
					name="index-number"
					id="index-number"
					required
				/>
			</div>
			<div className="input-field">
				<label htmlFor="institutional_email">Email</label>
				<input
					type="email"
					name="institutional_email"
					id="institutional_email"
					required
				/>
			</div>

			<button className="btn w-full p-3 send-btn">Send Invitation</button>
		</form>
	);
};
