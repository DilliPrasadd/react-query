import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Fetching from './Fetching';
import Mutation from './Mutation';
import Refetch from './Refetch';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Fetching/>
      <Mutation/>
      <Refetch/>
    </QueryClientProvider>
  );
}

export default App;
