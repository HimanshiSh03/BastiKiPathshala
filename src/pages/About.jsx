import React from 'react';

const About = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-12"
      style={{
        backgroundImage: "url('/hannah-busing-Zyx1bK9mqmA-unsplash.jpg')",
      }}
    >
      
      <div className="bg-white/30 backdrop-blur-md p-8 rounded-xl text-center max-w-3xl shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold  text-orange-500 mb-6">
          About Bastiki Pathshala
        </h2>
        <p className="text-lg text-black-200 leading-relaxed mb-6">
          Bastiki Pathshala is a non-profit initiative dedicated to providing quality education to underprivileged children.
          Our goal is to create a safe, nurturing space where children can learn, grow, and dream big—regardless of their background.
        </p>
        <p className="text-lg text-black-200 leading-relaxed">
          With the support of passionate volunteers and generous donors, we conduct regular teaching sessions,
          creative workshops, and community events to uplift and empower.
        </p>
      </div>
    </section>
  );
};

export default About;
