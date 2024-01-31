import React, { useState } from 'react';
import "./InputCounter.css" ; 
const InputCounter = () => {
  const [entries, setEntries] = useState([]);
  const [counter, setCounter] = useState(0);
  const [deleteIndex, setDeleteIndex] = useState('');
  const [updateIndex, setUpdateIndex] = useState('');
  const [updatedValue, setUpdatedValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = event.target.elements.entry.value;
    setEntries((prevEntries) => [...prevEntries, newEntry]);
    setCounter((prevCounter) => prevCounter + 1);
    event.target.elements.entry.value = ''; // Clear input field
  };

  const handleDelete = () => {
    setEntries((prevEntries) => {
      const newEntries = [...prevEntries];
      newEntries.splice(parseInt(deleteIndex, 10), 1);
      return newEntries;
    });
    setDeleteIndex('');
  };

  const handleUpdate = () => {
    setEntries((prevEntries) => {
      const newEntries = [...prevEntries];
      newEntries[parseInt(updateIndex, 10)] = updatedValue;
      return newEntries;
    });
    setUpdateIndex('');
    setUpdatedValue('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
      <p>Counter: {counter}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="entry">Enter text:</label>
          <input type="text" id="entry" />
          <button type="submit">Submit</button>
        </form>

        <p>Entries:</p>
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
        
      </div>

      <div>
        <p>Delete element at index:</p>
        <input
          type="number"
          value={deleteIndex}
          onChange={(e) => setDeleteIndex(e.target.value)}
        />
        <button type="button" onClick={handleDelete}>
          Delete
        </button>

        <p>Update element at index:</p>

        <input
          type="number"
          placeholder='Enter the index to be changed'
          value={updateIndex}
          onChange={(e) => setUpdateIndex(e.target.value)}
        />
        <input
          type="text"
          placeholder='Enter the new value'
          value={updatedValue}
          onChange={(e) => setUpdatedValue(e.target.value)}
        />
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default InputCounter;
