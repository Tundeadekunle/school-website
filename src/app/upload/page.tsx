"use client";
import React from "react";

const ReceiptUploadPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Upload Payment Receipt</h2>
        <h2>Kindly make payment for your child's/ward's registration.
          <p>Bank: Zenith Bank</p>
          <p>Bacnk Account Number: 0202010201</p>
          <p>Bank Account Name: The School</p>
          Then proceed to upload the payment receipt below.
        </h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeJ8naeDaI4kjvYYJ7VBa2Bw2Peg3a-ou30kFAu1BK00_h8Bg/viewform?embedded=true"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Payment Receipt Upload"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default ReceiptUploadPage;