import { ApartmentInvoice } from '../../models'
import { ApartmentContractRepository } from '../../repositories'
import { APARTMENT_INVOICE_STATUS_ENUM, APARTMENT_CONTRACT_STATUS_ENUM } from '../../enums'
import { InvoiceRepository } from '../../repositories/invoice_repository';

export class InvoiceService {


    static async sendMonthlyInvoiceToApartmentContract() {
        const activeContracts = await ApartmentContractRepository.findApartmentContractByStatus(APARTMENT_CONTRACT_STATUS_ENUM.ACTIVE) || [];
    
        if (activeContracts.length > 0) {
            Promise.all(activeContracts.map(async contract => {
                await InvoiceService.createInvoiceForApartment(contract._id)
            }))
            return {
                message: "send monthly invoice success"
            }
        } else {
            return {
                message: "no active contract"
            }
        }
    
    }

    static async createInvoiceForApartment(apartmentContractID) {
        apartmentContract = await ApartmentContract.findById
        const apartmentContract = await ApartmentContractRepository.findContractByContractID(apartmentContractID)
        const d = new Date()
        const apartmentInvoice = new ApartmentInvoice({
            apartmentContract,
            amount: apartmentContract.amount,
            createdDate: d,
            expiredDate: d.setDate(d.getDate() + 10),
            status: APARTMENT_INVOICE_STATUS_ENUM.NOT_YET
        })
        apartmentContract.invoices.push(apartmentInvoice)
        await apartmentInvoice.save()
        await apartmentContract.save()
    }

    static async checkPaidInvoice(invoiceID) {
        const invoice = await InvoiceRepository.findInvoiceByID(invoiceID)
        invoice.status = APARTMENT_INVOICE_STATUS_ENUM.PAID
        await invoice.save()
    }
}