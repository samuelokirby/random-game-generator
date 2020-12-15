import React from 'react';
import { useEffect, useState } from 'react';
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    console.log('use effect');
  });
  return (
    <main>
      <h1>Random Video Game Generator</h1>
      <h2>
        Click the button to generate a random title. Powered by the RAWG API.
      </h2>
      <p>
        <button>
          Generate
        </button>
      </p>
      <br />
      <h2>The date according to Go is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
