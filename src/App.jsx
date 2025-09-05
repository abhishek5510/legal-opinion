import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Case from "./pages/Case";
import About from "./pages/About";
import Start from "./pages/Start";
import NotFound from "./pages/Error";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Resources from "./pages/Resources";
import Testimonials from "./homepage/WrappedTestimonials";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="testimonials" element={<Testimonials />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
