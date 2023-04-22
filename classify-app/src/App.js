import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import LecturerSignupPage from "./LecturerSignupPage/LecturerSignupPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="./LecturerSignupPage" element={<HomePage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
