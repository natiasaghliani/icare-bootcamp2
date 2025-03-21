"use client";

import React, { useEffect, useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count value: ${count}`);
  }, [count]);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl">Counter: {count}</h1>
      <button onClick={plus} className="bg-blue-500 text-white px-4 py-2 m-2 rounded-md w-10">
        +
      </button>
      <button onClick={minus} className="bg-pink-500 text-white px-4 py-2 m-2 rounded-md w-10">
        -
      </button>
    </div>
  );
};
