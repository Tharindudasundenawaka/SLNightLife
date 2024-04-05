// frontend/App.js

import React, { useState, useEffect } from 'react';

function App() {
  const [helloText, setHelloText] = useState('');

  useEffect(() => {
    fetchHelloText();
  }, []);

  const fetchHelloText = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/hello'); 
      const text = await response.text();
      setHelloText(text);
    } catch (error) {
      console.error('Error fetching hello text:', error);
    }
  };

  return (
    <div>
      <h1>{helloText}</h1>
    </div>
  );
}

export default App;
