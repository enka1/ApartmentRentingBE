import mongoose, { Schema } from 'mongoose';

const RenterSchema = new Schema({
   username: {
      required: true,
      type: String
   },
   password: {
      required: true,
      type: String
   },
   firstName: {
      type: String
   },
   lastName: {
      type: String
   },
   contactNumber: {
      type: String
   },
   contactEmail: {
      type: String
   },
   contracts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contract"
   }],
   wallet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wallet"
   }

})

export const Renter = mongoose.model("Renter", RenterSchema);