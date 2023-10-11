import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import {
  About,
  Property,
  Contact,
  Team,
  PageNotFound,
  Home,
  Login,
  SignUp,
  PropertyDetails,
  CreateListing,
} from "./pages";

import Loader from "./components/common/Loader";
import ProductDetails from "./components/property/property-4/ProductDetails";
function App() {
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const route = useLocation();

  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // Loader when page is loading
  window.addEventListener("load", () => {
    setShowLoader(false);
  });

  return (
    <div>
      {showLoader && <Loader />}
      <Navbar />
      <div
        className="min-h-screen pb-40"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/property" element={<Property />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/team" element={<Team />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/property-details" element={<PropertyDetails />} />
          <Route path="/prod-dets" element={<ProductDetails />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <div className="px-[2%] md:px-[6%] bg-card-dark border border-card-dark">
        <div>
          <Footer />
        </div>
      </div>
      <BackToTopButton showButton={showButton} />
    </div>
  );
}

export default App;
