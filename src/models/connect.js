import { connect } from 'mongoose'

export const connectToMongoose = async (mongoURL) => {
   return await connect(mongoURL, { useNewUrlParser: true }).catch(err => {
      console.log("Connect to MongoDB Erorr:", err)
   })
}