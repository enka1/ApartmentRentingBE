import mongoose, { Schema } from 'mongoose';

const BuildingSchema = new Schema({
   address: {
      type: String
   },
   apartments: {
      type: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Apartment'
      }]
   }
});

export const Building = mongoose.model("Building", BuildingSchema);