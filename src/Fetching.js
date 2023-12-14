import React from 'react';
import { useQuery } from 'react-query';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
};

function Fetching() {
  const { data, isLoading, error } = useQuery('data', fetchData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Fetching;
