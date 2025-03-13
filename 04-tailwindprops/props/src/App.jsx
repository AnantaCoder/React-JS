import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import SkeletonCard from "./components/SkeletonCard"; 
const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {loading ? <SkeletonCard /> : user && (
        <Card
          image={user.picture.large}
          name={`${user.name.first} ${user.name.last}`}
          location={`${user.location.city}, ${user.location.country}`}
          email={user.email}
          linkText={null} 
        />
      )}
    </div> 
  );
};

export default App;
