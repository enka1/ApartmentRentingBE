import mongoose, { Schema } from 'mongoose';

const ApartmentContractSchema = new Schema({
   buildingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Building'
   },
   apartmentType: {
      type: String
   },
   // Giá tiền thuê hàng tháng
   monthlyRentPrice: {
      type: Number
   },
   registerDate: {
      type: Date,
      required: Date
   },
   // ExpiredDate sẽ dùng để gia hạn thêm mỗi khi tới tháng nhà
   expiredDate: {
      type: Date,
      required: Date
   },
   // Khi qua completionDate thì sẽ trả cọc về tài khoản của renter
   completionDate: {
      type: Date,
      required: true
   },
   // Tiền đặt cọc khi thuê nhà (Giúp tuân thủ các quy định thuê nhà)
   deposit: {
      type: Number,
      default: 0
   },
   apartment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Apartment"
   },
   invoices: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ApartmentInvoice'
   }],
   status: {
      type: String
   }
})

export const ApartmentContract = mongoose.model("ApartmentContract", ApartmentContractSchema);