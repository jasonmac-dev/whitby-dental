import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layouts";
import PageTitleUpdater from "./helpers";
const App = () => {
  return (
    <>
      <Router>
      <PageTitleUpdater />
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
