import {Router} from "express";
import * as apiRouter from "./routers";

export const api = Router();

api.use("/apartment-budgets", apiRouter.apartmentBudgetRouter);

api.use("/apartment-contracts", apiRouter.apartmentContractRouter);

api.use("/apartment-identity-cards", apiRouter.apartmentIdentityCardRouter);

api.use("/apartments", apiRouter.apartmentRouter);

api.use("/buildings", apiRouter.buildingRouter);

api.use("/money-transactions", apiRouter.moneyTransactionRouter);

api.use("/renters", apiRouter.renterRouter);

api.use("/transactions-trackings", apiRouter.transactionTrackingRouter);

api.use("/wallets", apiRouter.walletRouter);