import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layouts";
const App = () => {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> Route for About page */}
        {/* <Route path="/contact" element={<Contact />} /> Route for Contact page */}
      </Routes>
    </Router>
    </>
  );
};

export default App;
