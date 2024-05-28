import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userDetails = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${count}`
      );
      const data = await response.json();
      setUser(data);
    };
    userDetails();
  }, [count]);

  return (
    <div>
      {user && (
      <div>
        <h1>User Details</h1>
        <h3>{user.name}</h3>
        <h4>{user.email}</h4>
      </div>
      )}
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Drop</button>
    </div>
  );
};

export default UseEffect;
