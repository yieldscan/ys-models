import mongoose from "mongoose";
const CouncilIdentity = new mongoose.Schema(
	{
		accountId: { type: String, unique: true, required: true },
		vision: String,
		members: [{ member: String, role: String, twitter: String }],
	},
	{ timestamps: true }
);

export default CouncilIdentity;
