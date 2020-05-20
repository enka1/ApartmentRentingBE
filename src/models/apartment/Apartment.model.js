import mongoose, { Schema } from 'mongoose';

const ApartmentSchema = new Schema({
   building: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Building"
   },
   apartmentNumber: {
      type: Number,
      unique: 'Two apartment cannot share the same number ({VALUE})'
   },
   floor: {
      type: Number
   },
   // Apartment have many group of status distinguish by startTime and endTime 
   status: {
      type: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: "ApartmentStatus"
      }],
      default: []
   },
   apartmentUsedCalendar: {
      type: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: "ApartmentUsedCalendar"
      }],
      default: []
   },
   apartmentType: {
      type: String
   }
})

export const Apartment = mongoose.model("Apartment", ApartmentSchema);