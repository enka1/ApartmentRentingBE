import mongoose, { model, Schema } from 'mongoose';

const ApartmentStatusSchema = new Schema({
   apartment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Apartment"
   },
   status: String,
   startTime: {
      type: Date,
      required: true
   },
   expiredTime: Date
})

export const ApartmentStatus = model("ApartmentStatus", ApartmentStatusSchema);