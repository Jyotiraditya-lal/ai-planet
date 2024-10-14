import { useState } from 'react';

const LLMNode = ({ }) => {
  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState('text-davinci-003');

  return (
    <div className="p-4 border rounded bg-white">
      <h4>LLM Node</h4>
      <input 
        type="text" 
        placeholder="API Key" 
        value={apiKey} 
        onChange={(e) => setApiKey(e.target.value)} 
        className="w-full p-2 border mt-2"
      />
      <select 
        value={model} 
        onChange={(e) => setModel(e.target.value)} 
        className="w-full p-2 border mt-2"
      >
        <option value="text-davinci-003">text-davinci-003</option>
        <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
      </select>
    </div>
  );
};

export default LLMNode;
