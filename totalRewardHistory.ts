import mongoose from "mongoose";
const TotalRewardHistory = new mongoose.Schema(
	{
		eraIndex: { type: Number, unique: true, required: true },
		eraTotalReward: Number,
	},
	{ timestamps: true }
);
export default TotalRewardHistory;
