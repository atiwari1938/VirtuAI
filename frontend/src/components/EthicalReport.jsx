import React from 'react';

function EthicalReport({ report }) {
  if (!report) return null;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Ethical Analysis Report</h2>
      <p><strong>Bias Detected:</strong> {report.biasDetected ? 'Yes' : 'No'}</p>
      <p><strong>Ethical Score:</strong> {report.ethicalScore}</p>
      <p><strong>Recommendations:</strong> {report.recommendations}</p>
    </div>
  );
}

export default EthicalReport;
