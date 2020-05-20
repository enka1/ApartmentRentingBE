import { Wallet } from "../../models";

export class WalletRepository {
    static async findWalletByID(id) {
        return await Wallet.findById(id)
    }
}