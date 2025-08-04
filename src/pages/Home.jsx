import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      className="min-h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/yannis-h-uaPaEM7MiQQ-unsplash.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="bg-white/30 backdrop-blur-md p-8 rounded-xl text-center max-w-3xl shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
          Welcome to Basti ki Pathshala
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
          Empowering underprivileged children through free education, love, and community support.
        </p>
        <Link to="/volunteer">
          <button className="bg-orange-400 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
            Become a Volunteer
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
