"use client"
import React, { useState } from 'react';

interface PhoneNumber {
  formattedNumber: string;
  email: string;
}

const generatePhoneNumbers = (baseNumber: string, count: number): PhoneNumber[] => {
  const phoneNumbers: PhoneNumber[] = [];

  for (let i = 1000; i <= count; i += 1000) {
    const formattedNumber = `${baseNumber.slice(0, 3)}-${baseNumber.slice(3, 6)}-${i}`;
    const email = `${formattedNumber}@txt.att.net`;
    phoneNumbers.push({ formattedNumber, email });
  }

  return phoneNumbers;
};

const HomePage: React.FC = () => {
  const [baseNumber, setBaseNumber] = useState<string>('5551234567');
  const [count, setCount] = useState<number>(9999);

  const phoneNumbers = generatePhoneNumbers(baseNumber, count);

  return (
    <div>
      <h1>Generated Phone Numbers:</h1>
      
      <div>
        <label htmlFor="baseNumber">Base Number:</label>
        <input
        className='border-2 font-bold p-5 text-xl'
          type="text"
          id="baseNumber"
          value={baseNumber}
          onChange={(e) => setBaseNumber(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="count">Count:</label>
        <input
          type="number"
          id="count"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </div>

      <ul>
        {phoneNumbers.map(({ formattedNumber, email }) => (
          <li key={formattedNumber}>
            {formattedNumber} {email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;