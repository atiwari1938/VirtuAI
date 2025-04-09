import mongoose from 'mongoose';

const decisionSchema = new mongoose.Schema({
  scenario: { type: String, required: true },
  ethicalScore: { type: Number, required: true },
  biasDetected: { type: Boolean, required: true },
  recommendations: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Decision = mongoose.model('Decision', decisionSchema);

export default Decision;
