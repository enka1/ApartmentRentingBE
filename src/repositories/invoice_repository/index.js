import { ApartmentInvoice } from "../../models";

export class InvoiceRepository {
    static async findInvoiceByID(invoiceID) {
        return await ApartmentInvoice.findById(invoiceID)
    }
}