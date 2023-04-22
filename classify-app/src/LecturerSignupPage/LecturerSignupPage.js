import React from "react"
import "./LecturerSignupPage.css"

const LecturerSignupPage = () => {
  return (
    <div className="container">
    <div className="sign-up-lecturer-container">
      <p className="create-account">Create Account</p>
      <p className="role">Role</p>
      <div className="group-624">
        <div className="role-toggle">
          <div className="group-222">
            <p className="lecturer">Lecturer</p>
          </div>
          <p className="student">Student</p>
        </div>
          <input className="form-input" placeholder="First Name"/>
          <input className="form-input-1" placeholder="Last Name"/>
          <input className="form-input-2" placeholder="Staff ID"/>
          <input className="form-input-3" placeholder="Password"/>
          <input className="form-input-4" placeholder="Confirm Password"/>
          
        <div className="group-8106">
          <button className="sign-up">Sign Up</button>
        </div>
        <p className="already-have-an-account">Already have an account?</p>
        Confirm Password
    </div>
    </div>
    </div>
  )
};

export default LecturerSignupPage;
