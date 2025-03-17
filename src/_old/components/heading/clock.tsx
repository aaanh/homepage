"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [dateTime, setDateTime] = useState('');
  const dateInstance = new Date();
  const year = dateInstance.getFullYear().toString();
  const monthName = dateInstance.toLocaleString('en-US', { month: 'long' });
  const day = dateInstance.getDate().toString().padStart(2, '0');

  const dateString = monthName + ' ' + day + ', ' + year;

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="flex flex-col text-2xl md:text-4xl text-center">
    <p className="font-bold">{dateString}</p>
    <p>{dateTime}</p>
  </div>
}