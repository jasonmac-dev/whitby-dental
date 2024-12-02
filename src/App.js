import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home, {About} from "./layouts";
import PageTitleUpdater from "./helpers";
import Header from "./components";

const App = () => {

  const routesConfig = [
    { path: '/', element: <Home />, name: 'Home' },
    { path: '/about', element: <About />, name: 'About' },
  ];
  
  return (
    <>
      <Router>
        <PageTitleUpdater />
        <Header />
          <Routes>
          {routesConfig.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
          </Routes>
      </Router>
    </>
  );
};

export default App;
