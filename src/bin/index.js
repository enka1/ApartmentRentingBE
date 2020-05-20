import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import { config } from 'dotenv'

import { api } from '../apis';
import { connectToMongoose } from '../models'
import { SchedulerService } from '../services'


export async function startServer() {
   // Wait for loading all variable in .env
   await config()
   const app = express()
   await Promise.all([
      connectToMongoose(process.env.MONGODB_URL),
      app.use(bodyParser.json()),
      app.use(cors()),
      app.use(helmet()),
      app.use(compression()),
      app.use('/api', api)
   ])
   app.listen(process.env.PORT | 3000, () => {
      console.log(`Server is start on port ${process.env.PORT | 3000}`)
   });
   // schedulers
   SchedulerService.scheduleSendMonthlyInvoiceToApartment()
}