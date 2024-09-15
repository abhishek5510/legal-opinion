import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

import './../styles/service.scss'
import Hero from './../servicepage/Hero.jsx'
import Service from './../servicepage/Service.jsx'


function Services() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Our Services | Kampus Agency | IT, Software & Design Solutions
          </title>
          <meta
            name="description"
            content="Explore Kampus Agency’s extensive services, including IT solutions, software development, and comprehensive design services. Discover how our global expertise can meet your needs."
          />
          <meta
            name="keywords"
            content="IT services, software development, graphic design, Kampus Agency services, global expertise, Kigali, Kenya, India, UK, USA, Canada, graphic design, brand and identity, logo design, brand guidelines, typography and color schemes, business cards, stationery rwanda, brand strategy kigali, naming, company name idea, visual identity creation kigali, print design, brochures, flyers, posters, banners, packaging design, labels, product design, magazine, book covers, billboards, outdoor advertising, illustration, custom illustrations, character design, iconography, infographics, storyboarding, marketing collateral, presentation, pitch decks, social media graphics, ppc and trade show materials, email templates and banners, digital signage, UI/UX design, mobile app UI/UX design, website UI/UX design, wireframing and prototyping, user journey mapping, user testing and research, design systems, software development, web development, custom website development, wordpress development, webflow development, shopify development, e-commerce solutions, API development and Integration, headless CMS development, web applications, mobile app development, native iOS and Android app development, cross-platform app development, react native, flutter, progressive web apps, PWAs, mobile app prototyping and wireframing, app maintenance and updates, frontend development, HTML, CSS, JavaScript, ReactJS, Angular, VueJS, UI component libraries, Material UI, Tailwind, Animations and Interactivity, Backend Development, NodeJS, PHP, Python, Ruby on Rails, Database Management (MySQL, MongoDB, PostgreSQL), API Design & Development (REST, GraphQL), Server-side Rendering (Next.js, Nuxt.js), MERN/MEAN Stack Development, LAMP Stack Development, Cloud Integration & Deployment (AWS, Azure, Google Cloud), DevOps & CI/CD Setup, Custom Website Development, WordPress Development, Webflow Development, Shopify Development, E-commerce Solutions, API Development & Integration, Headless CMS Development, Web Applications, Native iOS & Android App Development, Cross-platform App Development (React Native, Flutter), Progressive Web Apps (PWAs), Mobile App Prototyping & Wireframing, App Maintenance & Updates, Frontend Development, HTML, CSS, JavaScript, React.js, Angular, Vue.js, UI Component Libraries (Material UI, Tailwind), Animations & Interactivity, CMS Customization & Maintenance, Multilingual & Multisite CMS Setup, Motion Graphics, Explainer Videos, Animated Infographics, Logo Animation, UI/UX Animations, Animated Ads & Social Media Videos, Corporate Video Production, Product Demo Videos, Video Editing & Subtitling, Educational & Training Videos, Product Highlight Videos, 3D Animation & Visual Effects, Promotional Video Content, Commercial Videos, Event & Conference Videos, Testimonial & Case Study Videos, Search Engine Optimization (SEO), On-Page SEO Optimization, Technical SEO Audits, Keyword Research & Strategy, Local SEO, Link Building & Outreach, SEO Content Writing, Social Media Strategy & Management, Paid Social Media Ads (Facebook, Instagram, LinkedIn), Social Media Content Creation, Influencer Marketing, Pay-Per-Click (PPC) Advertising, Google Ads (Search, Display, Shopping), Bing Ads, Retargeting & Remarketing Campaigns, Ad Copywriting & Design, Email Campaign Strategy, Automation & Segmentation, Email Template Design & Development, Lead Generation & Nurturing, Blogging & Article Writing, White Papers & Ebooks, Infographic Design, Video Marketing Content, A/B Testing & Multivariate Testing, User Behavior Analysis, Landing Page Design & Optimization, Sales Funnel Optimization, IT Support & Maintenance, Remote & On-Site Support, Server & Network Monitoring, Data Backup & Recovery, Software Updates & Security Patches, Troubleshooting & Bug Fixes, Cloud Storage Solutions (AWS, Azure, Google Cloud), Cloud Migration, Cloud App Development, Cloud Backup & Disaster Recovery, Security Audits & Penetration Testing, Firewalls & Intrusion Prevention, Data Encryption & Secure File Transfer, Identity & Access Management (IAM), Malware Protection & Antivirus Solutions, Network Setup & Management, VPN Configuration, Hardware & Software Installation, VOIP Solutions & Telephony Systems, CRM Integration & Automation, ERP System Setup, Workflow Automation Solutions (Zapier, Integromat), Brand Positioning, Brand Voice & Messaging, Brand Architecture, Competitor Analysis, Go-to-Market Strategy, Digital Transformation Consulting, Growth Marketing Strategy, Campaign Planning & Management, Customer Segmentation, Competitor Benchmarking, Data Analysis & Reporting, E-commerce Solutions, Shopify, WooCommerce, Magento Development, Custom Cart & Checkout Solutions, Payment Gateway Integration, Product Catalog & Inventory Management, Custom ERP Development, CRM Integration & Customization (Salesforce, HubSpot), Enterprise App Development, Business Intelligence & Reporting Dashboards, Augmented Reality (AR) App Development, Virtual Reality (VR) Content & Experiences, Interactive 3D Experiences, AI-Powered Chatbots & Virtual Assistants, Predictive Analytics & Data Modeling, Image & Video Recognition, Graphic Design Training, UI/UX Design Workshops, Branding Workshops, Web Development Bootcamps, App Development Training, DevOps & Automation, SEO & SEM Workshops, Social Media Marketing Training, Content Marketing & Strategy Training."
          />
          <meta property="og:title" content="Our Services | Kampus Agency" />
          <meta
            property="og:description"
            content="Discover Kampus Agency’s range of IT, software, and design services. From web development to branding and video production, find out how our global team can help you achieve success."
          />
          <meta
            property="og:image"
            content="[URL to services page featured image]"
          />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/services"
          />
          <link rel="canonical" href="https://www.kampusagency.com/services" />
        </Helmet>
        <div>
          <div className="service-page">
            <Hero/>
            <Service/>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
}

export default Services;
