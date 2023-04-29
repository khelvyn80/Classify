import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Dashboard from "./Dashboard/dashboard";
import AvailableVenue from "./AvailableVenue/AvailableVenue";
import { SignUp } from "./Pages/SignUp";
import { CourseRep } from "./Pages/CourseRep";
import { AddCourseRepPage } from "./Pages/AddCourseRepPage";
import BrowseVenues from "./BrowseVenues/BrowseVenues";
import { PageNotFound } from "./Pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/available_venue" element={<AvailableVenue />} />
        <Route path="/course_rep" element={<CourseRep />} />
        <Route path="/add_course_rep" element={<AddCourseRepPage />} />
        <Route path="/browse_venues" element={<BrowseVenues />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}


