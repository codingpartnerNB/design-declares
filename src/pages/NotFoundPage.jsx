import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="py-6 px-6 md:px-10">
      <div className="text-6xl font-bold">D!</div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg">This page could not be found.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
