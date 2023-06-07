import React from "react";

const Success: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">File Upload Successful</h1>
      <p className="text-gray-600">
        Your files have been successfully uploaded.
      </p>
    </div>
  );
};

export default Success;
