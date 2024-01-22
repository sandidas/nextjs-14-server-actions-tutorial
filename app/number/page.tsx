"use client";
// pages/index.tsx

import React, { useState } from "react";

interface PhoneNumber {
  formattedNumber: string;
  email: string;
}

const generatePhoneNumbers = (baseNumber: string, count: number): PhoneNumber[] => {
  const phoneNumbers: PhoneNumber[] = [];

  for (let i = 1000; i <= count; i++) {
    const formattedNumber = `${baseNumber.slice(0, 3)}${baseNumber.slice(3, 6)}${i}`;
    const email = `${formattedNumber}@txt.att.net`;
    phoneNumbers.push({ formattedNumber, email });
  }

  return phoneNumbers;
};

const HomePage: React.FC = () => {
  const [baseNumber, setBaseNumber] = useState<string>("5551234567");
  const [count, setCount] = useState<number>(9999);

  const phoneNumbers = generatePhoneNumbers(baseNumber, count);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Generated Phone Numbers:</h1>

      <div className="mb-4">
        <label htmlFor="baseNumber" className="block text-sm font-medium text-gray-600">
          Base Number:
        </label>
        <input type="text" id="baseNumber" value={baseNumber} onChange={(e) => setBaseNumber(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
      </div>

      <div className="mb-4">
        <label htmlFor="count" className="block text-sm font-medium text-gray-600">
          Count:
        </label>
        <input type="number" id="count" value={count} onChange={(e) => setCount(Number(e.target.value))} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
      </div>

      <ul className="list-disc ml-6">
        {phoneNumbers.map(({ formattedNumber, email }) => (
          <li key={formattedNumber} className="text-gray-700">
            Number: {formattedNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
