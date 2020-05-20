import mongoose, { Schema } from 'mongoose';

const ApartmentUsedCalendarSchema = new Schema({
   apartment: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Apartment"
   },
   registerDate: {
      required: true,
      type: Date
   },
   expiredDate: {
      required: true,
      type: Date
   }
})

export const ApartmentUsedCalendar = mongoose.model("ApartmentUsedCalendar", ApartmentUsedCalendarSchema);