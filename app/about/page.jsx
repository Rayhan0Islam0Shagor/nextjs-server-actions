import React from 'react';

export const metadata = {
  title: 'About Page',
  description:
    'SEO (Search Engine Optimization) is the key to enhancing online visibility. It involves optimizing websites with relevant keywords, content, and technical elements to rank higher on search engines, driving organic traffic and boosting online success.',
  alternates: {
    canonical: '/about',
    languages: {
      'en-US': '/en-US/about',
    },
  },
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;
