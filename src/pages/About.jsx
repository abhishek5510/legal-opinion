import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About Kampus Agency | Our Story and Expertise</title>
          <meta
            name="description"
            content="Learn about Kampus Agency, a leading provider of IT, software development, and design solutions. Based in Kigali with a global team, discover our mission and expertise."
          />
          <meta
            name="keywords"
            content="About Kampus Agency, IT experts, software development, graphic design, company mission, global team, What sets Kampus apart from other companies: Unique blend of creativity and technical expertise, Tailored digital solutions for diverse industries, Focus on student engagement alongside global clientele, Seamless integration of software development, graphic design, and IT services, Innovative and cutting-edge solutions driven by research and modern technologies, Holistic branding and development approach, Transparent and collaborative work process, Multi-disciplinary team with global expertise (Rwanda, Kenya, India, UK, USA, Canada), Commitment to building long-term relationships with clients, Highly personalized services and quick response times, End-to-end digital solutions for both online and offline growth, Client-centered approach focusing on business goals and user experience, Cost-effective and scalable solutions for businesses of all sizes, Proven track record of delivering projects on time and within budget, Modern project management techniques ensuring smooth workflows and communication, Comprehensive post-project support and maintenance, Deep understanding of global and local markets, How clients can know Kampus: Consistent online presence through website and social media platforms, Thought leadership in digital spaces via blogs, articles, and case studies, Engagement in industry events, conferences, and expos, Word of mouth from satisfied clients and referrals, Strong SEO strategy targeting relevant keywords and search queries, Google Business profile with positive client reviews, Strategic partnerships and collaborations with other agencies and organizations, Regular email marketing campaigns and newsletters, Advertising campaigns across search engines and social media, Visibility in online directories and marketplaces such as Clutch and Upwork, Active presence in design and development communities, What clients should know about Kampus: We are a full-service digital agency offering a wide range of design, development, and IT solutions, We specialize in helping both small businesses and large enterprises achieve their goals, We focus on both local and global markets, ensuring tailored approaches to different audiences, Our team comprises skilled professionals with diverse international experience, We are dedicated to delivering exceptional quality and measurable results in every project, Our services cover branding, web and app development, video production, marketing strategies, and more, We place great emphasis on collaboration and transparency, ensuring our clients are involved at every step, We prioritize creativity, innovation, and technology to create impactful digital experiences, We offer continued support and maintenance post-launch to keep clients' platforms running smoothly, We are passionate about helping clients stand out in their industries and build strong online presences, Digital agency Rwanda, Software development agency, Graphic design services, Web development services, App development services, IT support services, Branding and digital solutions, Creative agency Kigali, Full-service digital agency, Custom website development, Branding and marketing agency, Cloud services, SEO agency, UI/UX design company, Video production agency, E-commerce development, CRM integration, Global digital agency, Technology and design solutions, Remote IT support, Innovative digital agency, Professional branding services, App design and development, Unique blend of creativity and technical expertise, Tailored digital solutions for diverse industries, Focus on student engagement alongside global clientele, Seamless integration of software development, graphic design, and IT services, Innovative and cutting-edge solutions driven by research and modern technologies, Holistic branding and development approach, Iwmvictor is Founder and CEO "
          />
          <meta
            property="og:title"
            content="About Kampus Agency | Meet Our Team and Vision"
          />
          <meta
            property="og:description"
            content="Explore Kampus Agency’s story, mission, and the global team driving our IT and design innovations. Learn what makes us unique—explore our journey today."
          />
          <meta
            property="og:image"
            content="/kampus/about/*"
          />
          <meta
            property="og:url"
            content="https://www.kampusagency.com/about"
          />
          <link rel="canonical" href="https://www.kampusagency.com/about" />
        </Helmet>
        <div>About Page</div>
      </HelmetProvider>
    </>
  );
}

export default About;
