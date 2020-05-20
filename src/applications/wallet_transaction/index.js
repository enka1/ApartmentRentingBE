import { WalletService, InvoiceService, RechargeTimeService } from '../../services'

export class WalletTransaction {
    static async payInvoiceTransaction(invoiceID, walletID) {
        const paymentResponse = await WalletService.payment(walletID, invoiceID)
        if (paymentResponse.status === "success") {
            const newRechargeTime = await RechargeTimeService.createNewRechargeTime({ paymentResponse, ...walletID })
            const walletResponse = await WalletService.addNewRechargeTime(walletID, newRechargeTime)
            if (walletResponse.status === "success") {
                await InvoiceService.checkPaidInvoice(invoiceID)
                return {
                    status: "success",
                    message: "transaction success"
                }
            } else {
                return walletResponse
            }
        } else {
            return paymentResponse
        }
    }

    static async depositWalletTransaction(walletID, amount) {
        const paymentResponse = await WalletService.deposit(walletID, amount)
        if (paymentResponse.status === "success") {
            const newRechargeTime = await RechargeTimeService.createNewRechargeTime({ paymentResponse, ...walletID })
            const walletResponse = await WalletService.addNewRechargeTime(walletID, newRechargeTime)
            if (walletResponse.status === "success") {
                await InvoiceService.checkPaidInvoice(invoiceID)
                return {
                    status: "success",
                    message: "transaction success"
                }
            } else {
                return walletResponse
            }
        } else {
            return paymentResponse
        }
    }

    static async withdrawWalletTransaction(walletID, amount) {
        const paymentResponse = await WalletService.withdraw(walletID, invoiceID)
        if (paymentResponse.status === "success") {
            const newRechargeTime = await RechargeTimeService.createNewRechargeTime({ paymentResponse, ...walletID })
            const walletResponse = await WalletService.addNewRechargeTime(walletID, newRechargeTime)
            if (walletResponse.status === "success") {
                await InvoiceService.checkPaidInvoice(invoiceID)
                return {
                    status: "success",
                    message: "transaction success"
                }
            } else {
                return walletResponse
            }
        } else {
            return paymentResponse
        }
    }
}