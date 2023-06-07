import React from "react";
import { Inter } from "next/font/google";
import UploadComponent from "@/components/UploadComponent";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to the Home Pag Upload Page
        </h1>
        <UploadComponent />
      </div>
    </div>
  );
};

export default Home;
