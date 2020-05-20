import mongoose, { Schema } from 'mongoose';

const ApartmentInvoiceSchema = new Schema({
   apartmentContract: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ApartmentContract"
   },
   amount: {
      type: Number,
      default: 0
   },
   status: {
      type: String
   },
   createdDate: {
      type: Date
   },
   expiredDate: {
      type: Date
   },
})

export const ApartmentInvoice = mongoose.model("ApartmentInvoice", ApartmentInvoiceSchema);