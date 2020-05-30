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
  const compareTime = (a: Transaction, b: Transaction) => a.time.localeCompare(b.time);

  function push<T>(arr: Array<T>, elem: T): T {
    arr.push(elem);
    return elem;
  }
// zwracamy tablice i element ktorego szukalismy
// element moze byc ten co wyszedl z getter'a,
// albo default
  function getOrAdd<T>(
    arr: Array<T>,
    getter: (arr: Array<T>) => T | undefined,
    defaultValue: T
  ): [Array<T>, T] {
    const elem = getter(arr);
    if (elem === undefined) {
      return [[...arr, defaultValue], defaultValue];
    } else {
      return [arr, elem];
    }
  }
  
  function last<T>(arr: Array<T>): T | undefined {
    return arr[arr.length - 1];
  }
  
  function isLongerThan<T>(length: number): (arr: Array<T>)=> boolean {
    return it => it.length > length
  }

  const computeTransactionBuckets = (
    buckets: Array<Array<Transaction>>,
    transaction: Transaction
  ): Array<Array<Transaction>> => {
    // push jest słaby -> ale, w tym wypadku korzystamy tylko z lokalnych zmiennych a nie zmianieamy globalnych
    const [newBuckets, lastBucket] = getOrAdd(buckets, last, []);
    const lastElement = last(lastBucket);
    if (lastElement === undefined || isDuplicated(lastElement, transaction)) {
      lastBucket.push(transaction);
    } else {
      // return [...buckets, [transaction]]
      newBuckets.push([transaction]);
    }
    return newBuckets;
  };

  return transactions
    .sort(compareTime)
    .reduce(computeTransactionBuckets, [])
    .filter(isLongerThan(1));
};
