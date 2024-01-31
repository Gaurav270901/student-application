import React, { useState } from 'react';
import './InputCounter.css';

const InputCounter = () => {
  const [entries, setEntries] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = event.target.elements.entry.value;
    setEntries((prevEntries) => [...prevEntries, newEntry]);
    setCounter((prevCounter) => prevCounter + 1);
    event.target.elements.entry.value = ''; // Clear input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="entry">Enter text:</label>
      <input type="text" id="entry" />
      <button type="submit">Submit</button>
      <p>Entries:</p>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
      <p>Counter: {counter}</p>
    </form>
  );
};

export default InputCounter;
