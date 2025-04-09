import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../services/api';

function ScenarioForm() {
  const [scenario, setScenario] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!scenario.trim()) {
      toast.error('Please enter a scenario!');
      return;
    }

    try {
      const response = await axios.post('/analyze', { scenario });
      toast.success('Ethical Analysis Submitted!');
      console.log(response.data); // Later show report
    } catch (error) {
      console.error(error);
      toast.error('Failed to analyze scenario.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-2xl mx-auto">
      <textarea
        className="w-full p-2 border rounded-md"
        rows="5"
        placeholder="Describe your decision dilemma here..."
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
      ></textarea>
      <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Analyze
      </button>
    </form>
  );
}

export default ScenarioForm;
