import { Wallet } from '../../models'
import { WALLET_TRANSACTION_KIND_ENUM, APARTMENT_INVOICE_STATUS_ENUM } from '../../enums'
import { WalletRepository, InvoiceRepository } from '../../repositories';
export class WalletService {
    static async createNewWallet(renterID) {
        const newWallet = new Wallet({
            amount: 0,
            renter: renterID
        })
        await newWallet.save()
        return newWallet._id
    }


    static async deposit(walletID, amount) {

        const wallet = await Wallet.findById(walletID);
        if (wallet) {
            wallet.amount = wallet.amount + amount
            await wallet.save()
            return {
                status: "success",
                transactionDate: new Date(),
                kind: WALLET_TRANSACTION_KIND_ENUM.DEPOSIT,
                walletID: wallet._id,
                transactionAmount: amount,
                walletAmount: wallet.amount,
                partner: null
            }
        } else {
            return {
                status: "error",
                message: "Not existed wallet!"
            }
        }
    }

    static async withdraw(walletID, amount) {
        const wallet = await Wallet.findById(walletID);
        if (wallet) {
            if (wallet.amount >= amount) {
                wallet.amount = wallet.amount - amount
                await wallet.save()
                return {
                    status: "success",
                    transactionDate: new Date(),
                    kind: WALLET_TRANSACTION_KIND_ENUM.WITHDRAW,
                    walletID: wallet._id,
                    transactionAmount: amount,
                    walletAmount: wallet.amount,
                    partner: null
                }
            } else {
                return {
                    status: "error",
                    message: "Not enough money!"
                }
            }
        } else {
            return {
                status: "error",
                message: "Not existed wallet!"
            }
        }

    }

    static async payment(walletID, invoiceID) {
        const wallet = await WalletRepository.findWalletByID(walletID)
        if (wallet) {
            const invoice = await InvoiceRepository.findInvoiceByID(invoiceID)
            if (invoice) {
                if (invoice.status === APARTMENT_INVOICE_STATUS_ENUM.NOT_YET) {
                    if (wallet.amount >= invoice.amount) {
                        wallet.amount = wallet.amount - amount
                        await wallet.save()
                        return {
                            status: "success",
                            transactionDate: new Date(),
                            kind: WALLET_TRANSACTION_KIND_ENUM.PAYMENT,
                            walletID: wallet._id,
                            transactionAmount: amount,
                            walletAmount: wallet.amount,
                            partner: invoice
                        }
                    } else {
                        return {
                            status: "error",
                            message: "Not enough money!"
                        }
                    }
                } else {
                    return {
                        status: "error",
                        message: "This invoice have already paid!"
                    }
                }
            } else {
                return {
                    status: "error",
                    message: "Invoice not found!"
                }
            }
        } else {
            return {
                status: "error",
                message: "Not existed wallet!"
            }
        }
    }

    static async addNewRechargeTime(walletID, rechargeTime) {
        const wallet = await WalletRepository.findWalletByID(wallet)
        if(wallet) {
            wallet.rechargeTimes.push(rechargeTime)
            await wallet.save()
            return {
                status:"success",
                message:"add success"
            }
        }else {
            return {
                status: "error",
                message: "Not existed wallet!"
            }
        }
    }
}