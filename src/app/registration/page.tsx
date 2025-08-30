"use client";
import React from "react";

const RegistrationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Register</h2>
        
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfRcxcZHLyvnWWOh2qhPb6pw21KGIjt3rw7C8VHTAPP_2tkag/viewform?embedded=true"
          width="100%"
          height="700"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Registration Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default RegistrationPage;
