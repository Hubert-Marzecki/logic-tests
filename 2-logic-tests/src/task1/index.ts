import { Transaction } from "../Model";

interface TransactionBasic {
  amount: number;
  category: string;
  time: number;
}

export const getBalanceByCategoryInPeriod = (
  transactionsList: Transaction[],
  category: string,
  startTime: string,
  endTime: string
): number => {



  const transactionBasic: TransactionBasic[] = transactionsList.map(
    (transfer: Transaction) => {
      const {
        id,
        sourceAccount,
        targetAccount,
        ...transactionBasic
      } = transfer;
      return {
        ...transactionBasic,
        time: Date.parse(transactionBasic.time),
      };
    }
  );

  let startDate: number = Date.parse(startTime);
  let endDate: number = Date.parse(endTime);
  const transactionsInTime: TransactionBasic[] = transactionBasic.filter(
    (transfer: TransactionBasic) =>
      transfer.category === category &&
      transfer.time >= startDate &&
      transfer.time <= endDate
  );

  const balance: number = transactionsInTime.reduce(
    (cumulatedBalance: number, transfer: TransactionBasic) =>
      cumulatedBalance + transfer.amount, 0 );

  return balance;
};
