import { OpenAI } from 'langchain/llms/openai';

const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: "gpt-4o",
  temperature: 0.3, // stable outputs
});

export const analyzeScenario = async (scenario) => {
  const prompt = `
You are an ethical advisor. Analyze this decision scenario based on fairness, legal compliance, and corporate ethics.
Scenario: ${scenario}
Return:
- Bias Detected: (Yes/No)
- Ethical Score: (0 to 100)
- Recommendations: (Short paragraph)
`;
  const response = await model.call(prompt);
  return response;
};
