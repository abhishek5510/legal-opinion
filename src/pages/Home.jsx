import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

import './../styles/home.scss'
import Hero from "../homepage/Hero";
import Work from "./../homepage/Work";
import Brands from "../homepage/Brands";
import Service from "./../homepage/Service";
import Courses from "./../homepage/Courses";
import Solutions from "./../homepage/Solutions";

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Kampus Agency | Premier IT, Software & Design Solutions</title>
          <meta
            name="description"
            content="Kampus Agency provides top-tier IT, software development, and graphic design solutions. Based in Kigali with a global reach, we offer innovative services to elevate your business."
          />
          <meta
            name="keywords"
            content="IT solutions, software development, graphic design, Kampus Agency, digital innovation, Kigali, global services, creative agency, branding experts, custom software development, UX design services, digital transformation, AI solutions for business, enterprise app development, e-commerce development, kampus, kampus agency, website, mobile app, ncaka website, social media, in rwanda, rwanda, rwandan, kampus rwanda, business in rwanda, best graphic design agency for startups, affordable website development for small businesses, high-quality branding and logo design, enterprise software development company, full-stack software development services, graphic design, IT in rwanda, information technology, frontend, backend, kigali startups, startup in rwanda, agency in rwanda, rwandan company, kigali innovation city, smart africa, african company, rwandan company, it in rwanda, rwanda tech companies, software development in kigali, kigali IT services, Rwanda software development, web development rwanda, mobile app development in rwanda, graphic design kigali, e-commerce solutions rwanda, affordable tech solutions for African startups, Rwanda-based branding agency, best digital marketing agency Kigali, custom software for Rwanda businesses, redefine innovation, top software development kigali, graphic design agency Rwanda, branding services in Africa, custom app development, creative agency Rwanda, how to grow a startup using digital tools, branding strategies for new businesses, university, college, university of rwanda, kigali institute of science and technology, internships in rwanda, sponsorship for student in rwanda, schools in rwanda, call us, 250733545477, kampusagency@gmail.com, google analytics, youtube, technology in rwanda, tech, nyarugenge, gasabo, kicukiro, one stop center, earn online, making money in rwanda, freelance jobs in rwanda, freelance, jobs in rwanda, real estate in rwanda, in rwanda, in kigali, electronics in kigali, shop in rwandam buy and sell in rwanda"
          />
          <meta
            property="og:title"
            content="Kampus Agency | Premier IT, Software & Design Experts"
          />
          <meta
            property="og:description"
            content="Discover Kampus Agency, where cutting-edge IT, software development, and design expertise come together. Transform your business with our global solutions—get in touch today."
          />
          <meta
            property="og:image"
            content="[URL to home page featured image]"
          />
          <meta property="og:url" content="https://www.kampusagency.com" />
          <link rel="canonical" href="https://www.kampusagency.com" />
        </Helmet>
        <>
          <div className="home">
            <Hero />
            <Brands />
            <Service />
            <Work />
            <Courses />
            <Solutions />
          </div>
        </>
      </HelmetProvider>
    </>
  );
}

export default Home;
