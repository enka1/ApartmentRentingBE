import { InvoiceService } from '../invoice_service';
import schedule from 'node-schedule'

export class SchedulerService {
    static scheduleSendMonthlyInvoiceToApartment() {
        console.log("start schedule to send monthly invoice")
        schedule.scheduleJob('0 0 0 10 * ? *', async () => {
            await InvoiceService.sendMonthlyInvoiceToApartmentContract()
            console.log("send monthly Invoice success")
        })
    }
}