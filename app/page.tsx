"use client";
import Hello from "./components/Hello";
import UserCard from "./components/UserCard";

export default function Home() {
  const users = [
    { name: "Alice", age: 25, role: "Developer" },
    { name: "Bob", age: 30, role: "Designer" },
    { name: "Charlie", age: 28, role: "Project Manager" },
  ];
  return (
   <div>
    <div className="">
      <Hello  name="Alice" items={["Apple", "Banana", "Cherry"]}/>
    </div>
    <div className="p-5 space-y-4">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
   </div>
  );    
}
