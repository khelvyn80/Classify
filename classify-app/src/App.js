import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
<<<<<<< HEAD
// import LecturerSignupPage from "./LecturerSignupPage/LecturerSignupPage";

=======
import Dashboard from "./Dashboard/dashboard";
import AvailableVenue from "./AvailableVenue/AvailableVenue";
import { SignUp } from "./Pages/SignUp";
import { CourseRep } from "./Pages/CourseRep";
import { AddCourseRepPage } from "./Pages/AddCourseRepPage";
import { PageNotFound } from "./Pages/PageNotFound";
>>>>>>> bdca2217d32c16d3484bff26bcb68462dcc4886d

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
=======
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/available_venue" element={<AvailableVenue />} />
        <Route path="/course_rep" element={<CourseRep />} />
        <Route path="/add_course_rep" element={<AddCourseRepPage />} />
        <Route path="/*" element={<PageNotFound />} />
>>>>>>> bdca2217d32c16d3484bff26bcb68462dcc4886d
      </Routes>
    </BrowserRouter>
  );
}
<<<<<<< HEAD
=======


>>>>>>> bdca2217d32c16d3484bff26bcb68462dcc4886d
