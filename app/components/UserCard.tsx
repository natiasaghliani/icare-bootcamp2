interface User {
    name: string;
    age: number;
    role: string;
  }
  
  interface UserCardProps {
    user: User;
  }
  
  const UserCard = ({ user }: UserCardProps) => {
    return (
      <div className="border p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl">
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-gray-700">Age: {user.age}</p>
        <p className="text-gray-700">Role: {user.role}</p>
      </div>
    );
  };
  
  export default UserCard;