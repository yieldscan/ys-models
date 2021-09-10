import mongoose from "mongoose";
const AccountIdentity = new mongoose.Schema(
	{
		accountId: { type: String, unique: true, required: true },
		stashId: String,
		display: String,
		displayParent: String,
		parent: String,
		email: String,
		eraIndex: Number,
		legal: String,
		riot: String,
		web: String,
		twitter: String,
	},
	{ timestamps: true }
);
export default AccountIdentity;
