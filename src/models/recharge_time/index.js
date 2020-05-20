import mongoose, { model, Schema } from 'mongoose';

const RechargeTimeSchema = new Schema({
   kind: {
      type: String
   },
   amount: {
      type: Number
   },
   executionDate: {
      type: Date
   },
   wallet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wallet"
   }
})

export const RechargeTime = model("RechargeTime", RechargeTimeSchema);