import mongoose from 'mongoose';
const Validators = new mongoose.Schema(
  {
    stashId: { type: String, unique: true, required: true },
    controllerId: String,
    accountId: String,
    riskScore: Number,
    estimatedPoolReward: Number,
    activeErasCount: Number,
    totalSlashCount: Number,
    commission: Number,
    blocked: Boolean,
    totalStake: Number,
    ownStake: Number,
    oversubscribed: Boolean,
    rewardsPer100KSM: Number,
    isElected: Boolean,
    isNextElected: Boolean,
    isWaiting: Boolean,
    nominators: [
      {
        nomId: String,
        stake: Number,
      },
    ],
    claimedRewards: [Number],
  },
  { timestamps: true },
);

export default Validators;
