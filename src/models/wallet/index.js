import mongoose, { Schema } from 'mongoose';

const WalletSchema = new Schema({
   renter: {
      type: mongoose.Types.ObjectId,
      ref: "Renter"
   },
   amount: {
      type: Number
   },
   rechargeTimes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "RechargeTime",
   }]
})

export const Wallet = mongoose.model("Wallet", WalletSchema);