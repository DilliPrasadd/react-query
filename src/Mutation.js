import React from 'react';
import { useMutation } from 'react-query';

const createData = async (newData) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  });

  return response.json();
};

function Mutation() {
  const { mutate, isLoading, isError, data, isSuccess} = useMutation(createData);

  const handleCreate = async () => {
    await mutate({
        "userId": 100,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    });
  };

  if(isLoading){
    return <h1>loading</h1>
  }

  if(isSuccess){

    <h3>{data.body}</h3>
  }


  if(isError){
    return <h1>error</h1>
  }

  return (
    <div>
        {data !== undefined && <h1>{data.body}</h1>}
      <button onClick={handleCreate}>Add Data</button>
    </div>
  );
}

export default Mutation;
