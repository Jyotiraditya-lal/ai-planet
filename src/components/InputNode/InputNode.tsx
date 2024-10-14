import { useState } from 'react';

const InputNode = ({ }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="p-4 border rounded bg-white">
      <h4>Input Node</h4>
      <input 
        type="text" 
        placeholder="Enter query" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        className="w-full p-2 border mt-2"
      />
    </div>
  );
};

export default InputNode;
