import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitleUpdater = () => {
  const location = useLocation();
  const siteName = "Whitby Dental Clinic"
  useEffect(() => {
    // Map routes to page titles
    const titles = {
      "/": `Home - ${siteName}`,
      "/about": `About Us - ${siteName}`,
      "/services": `Our Services - ${siteName}`,
    };

    // Set the document title based on the current route
    document.title = titles[location.pathname] || "My App";
  }, [location]);

  return null; // This component doesn't render anything
};

export default PageTitleUpdater;
