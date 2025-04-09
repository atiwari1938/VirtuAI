export const parseAnalysis = (openaiResponse) => {
    const biasDetected = /Bias Detected:\s*(Yes)/i.test(openaiResponse);
    const ethicalScoreMatch = openaiResponse.match(/Ethical Score:\s*(\d+)/i);
    const recommendationsMatch = openaiResponse.match(/Recommendations:\s*(.*)/i);
  
    return {
      biasDetected,
      ethicalScore: ethicalScoreMatch ? Number(ethicalScoreMatch[1]) : 50,
      recommendations: recommendationsMatch ? recommendationsMatch[1].trim() : 'No recommendations provided.',
    };
  };
  