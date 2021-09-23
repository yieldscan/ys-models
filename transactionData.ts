import mongoose from 'mongoose';
const TransactionData = new mongoose.Schema(
  {
    stashId: String,
    network: String,
    controllerId: String,
    injectorId: String,
    transactionType: String,
    sourcePage: String,
    walletType: String,
    ysFees: Number,
    ysFeesAddress: String,
    ysFeesRatio: Number,
    ysFeesPaid: Boolean,
    alreadyBonded: Number,
    stake: Number,
    transactionHash: String,
    successful: Boolean,
  },
  { timestamps: true },
);
export default TransactionData;
