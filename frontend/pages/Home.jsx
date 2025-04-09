import React from 'react';
import ScenarioForm from '../components/ScenarioForm';

function Home() {
  return (
    <div className="mt-8">
      <h1 className="text-center text-3xl font-bold mb-4">Submit a Decision Scenario</h1>
      <ScenarioForm />
    </div>
  );
}

export default Home;
