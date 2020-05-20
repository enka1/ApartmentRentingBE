import { Renter, Wallet } from '../../models'

export class RenterFactory {
   static async createNewRenter(username, password, deposit) {
      let newRenter = await Renter.create({
         username,
         password
      })
      let newWallet = await Wallet.create({
         renter: newRenter,
         amount: deposit,
         rechargeTimes: []
      })
      newRenter.wallet = newWallet
      newRenter.save()
   }


}