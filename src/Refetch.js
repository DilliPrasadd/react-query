import React from 'react';
import { useQuery } from 'react-query';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
};

function Refetch() {
  const { data, isLoading, error, refetch } = useQuery('data', fetchData);

  const handleRefetch = () => {
    refetch();
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.username}</div>
      ))}
      <button onClick={handleRefetch}>Refetch Data</button>
    </div>
  );
}

export default Refetch;
