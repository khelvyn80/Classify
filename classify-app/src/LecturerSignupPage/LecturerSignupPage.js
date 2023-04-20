import React from "react"
import "./LecturerSignupPage.css"

export default function SignupLecturer() {
  return (
    <div className="sign-up-lecturer clip-contents">
      <p className="create-account">Create Account</p>
      <p className="role">Role</p>
      <div className="group-624">
        <div className="role-toggle">
          <div className="group-222">
            <p className="lecturer">Lecturer</p>
          </div>
          <p className="student">Student</p>
        </div>
        <div className="form-input">
          <p className="first-name">First name</p>
        </div>
        <div className="form-input-1">
          <p className="last-name">Last Name</p>
        </div>
        <div className="form-input-2">
          <p className="staff-id">Staff ID</p>
        </div>
        <div className="form-input-3">
          <p className="password">Password</p>
        </div>
        <div className="form-input-4">
          <p className="confirm-password">Confirm Password</p>
        </div>
        <div className="group-8106">
          <p className="sign-up">Sign Up</p>
        </div>
        <p className="already-have-an-account">Already have an account?</p>
      </div>
    </div>
  )
}
