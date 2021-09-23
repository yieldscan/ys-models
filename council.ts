import mongoose from 'mongoose';
const Council = new mongoose.Schema(
  {
    accountId: { type: String, unique: true, required: true },
    stake: Number,
    isRunnersUp: Boolean,
    isPrime: Boolean,
    totalBalance: Number,
    backersInfo: [
      {
        backer: String,
        stake: Number,
      },
    ],
  },
  { timestamps: true },
);
export default Council;
