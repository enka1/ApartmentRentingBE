import { RechargeTime } from '../../models'
export class RechargeTimeService {

    static async createNewRechargeTime({ kind, amount, executionDate, walletID, partner }) {
        const newRechargeTime = new RechargeTime({
            kind,
            amount,
            executionDate,
            wallet: walletID,
            partner
        });
        await newRechargeTime.save()
        return newMoneyTransaction
    }
}