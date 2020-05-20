import { Router } from "express";
import { WalletTransaction } from '../../../applications'
export const applicationRouter = Router();

applicationRouter.post("/pay-invoice", async (_, res) => {
    const responseData = await WalletTransaction.payInvoiceTransaction(req.invoiceID, req.walletID)
    res.send(responseData)
})

applicationRouter.post("/withdraw-wallet", async (_, res) => {
    const responseData = await WalletTransaction.withdrawWalletTransaction(req.walletID, req.amount)
    res.send(responseData)
})

applicationRouter.post("/", async (_, res) => {
    const responseData = await WalletTransaction.depositWalletTransaction(req.walletID, req.amount)
});