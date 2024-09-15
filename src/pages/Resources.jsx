import React from "react";

import "./../styles/resources.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "../resourcepage/Hero";
import Resource from "../resourcepage/Resource";

function Resources() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Resources — Kampus Agency</title>
          <meta
            name="description"
            content="Free graphic design and web templates for you prepared by kampus team to make sure your work goes smoothly."
          />
        </Helmet>
        <div className="resource-page">
            <Hero/>
            <Resource/>
        </div>
      </HelmetProvider>
    </>
  );
}

export default Resources;
