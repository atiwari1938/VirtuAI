import { analyzeScenario } from '../services/openaiService.js';
import { parseAnalysis } from '../utils/responseFormatter.js';
import Decision from '../models/Decision.js';

export const analyzeEthicalDecision = async (req, res) => {
  try {
    const { scenario } = req.body;

    if (!scenario) {
      return res.status(400).json({ message: 'Scenario is required.' });
    }

    const openaiResponse = await analyzeScenario(scenario);
    const parsedResult = parseAnalysis(openaiResponse);

    const decision = await Decision.create({
      scenario,
      ...parsedResult,
    });

    res.status(201).json({
      message: 'Analysis Complete',
      data: decision,
    });
  } catch (error) {
    console.error('Error analyzing scenario:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
