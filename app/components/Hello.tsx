"use client";

interface Props {
    name: string;
    items: string[];
  }
  
  const Hello = ({ name, items }: Props) => {
    return (
      <div className="p-6">
        <h1 className="text-orange-600 text-4xl">Hello, {name}!</h1>
        <p className="text-cyan-800 text-3xl">Welcome to my Next.js app.</p>
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
            <li key={index} className="text-green-700 text-2xl">{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Hello;
