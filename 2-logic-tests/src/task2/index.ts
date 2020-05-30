import { Transaction } from "../Model";
export const findDuplicateTransactions = (
  transactions: Transaction[]
): Transaction[][] => {
  function timeDifference(a: string, b: string): number {
    return Math.abs(
      <number>new Date(a).getTime() - <number>new Date(b).getTime()
    );
  }

  function isDuplicated(a: Transaction, b: Transaction): boolean {
    return (
      a.id !== b.id &&
      a.sourceAccount === b.sourceAccount &&
      a.targetAccount === b.targetAccount &&
      a.amount === b.amount &&
      a.category === b.category &&
      timeDifference(a.time, b.time) < 60000
    );
  }

  // const dupa : Transaction[] = transactions.filter(isDublicated(transactions[0], transactions[1]))

  // [[t1, t2], [t3], ]
  // t1.time -> t2.time
  // [], [transakcja] =>

  // posortowanie transakcji po czasie
  // bierzemy nowa transakcje,
  // patrzymy czy pasuje do ostatniego z zakresów transakcji
  // jezeli pasuje, to dodajemy do zakresu
  // jezeli nie, tworzymy nowy zakres

  const buckets: Array<Array<Transaction>> = [];
  const sortedTransactions = transactions.sort(
    (a: Transaction, b: Transaction) => a.time.localeCompare(b.time)
  );
  function push<T>(arr: Array<T>, elem: T): T {
    arr.push(elem);
    return elem;
  }
  function getOrAdd<T>(
    arr: Array<T>,
    getter: (arr: Array<T>) => T | undefined,
    defaultValue: T
  ): T {
    const elem = getter(arr);
    if (elem === undefined) {
      return push(arr, defaultValue);
    } else {
      return elem;
    }
  }
  function last<T>(arr: Array<T>): T | undefined {
    return arr[arr.length - 1];
  }
  const putTransactionInLastCompatibleBucketOrNew = (
    buckets: Array<Array<Transaction>>,
    transaction: Transaction
  ) => {
    const lastBucket: Array<Transaction> = getOrAdd(buckets, last, []);
    const lastElement = last(lastBucket);
    if (lastElement === undefined || isDuplicated(lastElement, transaction)) {
      lastBucket.push(transaction);
    } else {
      buckets.push([transaction]);
    }
  };
  for (let transaction of sortedTransactions) {
    putTransactionInLastCompatibleBucketOrNew(buckets, transaction);
  }
  const result = buckets.filter(it => it.length > 1);

  return  result;
};
