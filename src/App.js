import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/LoginSignup/Signup";
import Opportunity from "./Pages/LoginSignup/Components/Opportunity";
import Question1 from "./Pages/LoginSignup/Components/Question1";
import Question2 from "./Pages/LoginSignup/Components/Question2";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/opportunity" element={<Opportunity />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
      </Routes>
    </Router>
  );
}

export default App;
