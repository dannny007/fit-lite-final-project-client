import React from "react";

const TrustedBy = () => {
  return (
    <div className="bg-white py-32">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">Trusted by</h2>
        <div className="flex justify-center items-center space-x-8">
          <img src="https://via.placeholder.com/100" alt="Logo 1" className="h-24" />
          <img src="https://via.placeholder.com/100" alt="Logo 2" className="h-24" />
          <img src="https://via.placeholder.com/100" alt="Logo 3" className="h-24" />
          <img src="https://via.placeholder.com/100" alt="Logo 4" className="h-24" />
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;