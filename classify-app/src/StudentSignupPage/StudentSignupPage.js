import React from "react"
import "./StudentSignupPage.css"

export default function SignUpStudent() {
  return (
    <div className="sign-up-student clip-contents">
      <p className="create-account">Create Account</p>
      <p className="role">Role</p>
      <div className="group-048">
        <div className="role-toggle">
          <p className="lecturer">Lecturer</p>
          <div className="group-661">
            <p className="student">Student</p>
          </div>
        </div>
        <div className="form-input">
          <p className="institutional-email">Institutional Email</p>
        </div>
        <div className="form-input-1">
          <p className="invitation-code">Invitation Code</p>
        </div>
        <div className="form-input-2">
          <p className="password">Password</p>
        </div>
        <div className="form-input-3">
          <p className="confirm-password">Confirm Password</p>
        </div>
        <div className="group-143">
          <p className="sign-up">Sign Up</p>
        </div>
        <p className="already-have-an-account">Already have an account?</p>
      </div>
    </div>
  )
}
