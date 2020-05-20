import mongoose, { model, Schema } from 'mongoose';

const ApartmentBudgetSchema = new Schema({
   contractID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ApartmentContract"
   },
   deposit: Number,
   debt: Number,

   status: {
      type: String
   },
   paidTimes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "TransactionTracking"
   }]

})

export const ApartmentBudget = model("ApartmentBudget", ApartmentBudgetSchema);