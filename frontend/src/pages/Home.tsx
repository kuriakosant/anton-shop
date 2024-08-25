import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Anton Garments, trendy fashion awaits.</h1>
        <p className="text-white mb-6">Check out our Products!</p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Shop Now</button>
      </div>
    </main>
  );
};

export default Home;
