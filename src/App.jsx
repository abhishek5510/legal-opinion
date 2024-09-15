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
import Testimonials from "./pages/Testimonials";
import Resources from "./pages/Resources";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cases" element={<Case />} />
            <Route path="*" element={<NotFound />} />
            <Route path="about" element={<About />} />
            <Route path="articles" element={<Blog />} />
            <Route path="get-start" element={<Start />} />
            <Route path="courses" element={<Courses />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Portfolio />} />
            <Route path="resources" element={<Resources />} />
            <Route path="testimonials" element={<Testimonials />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
