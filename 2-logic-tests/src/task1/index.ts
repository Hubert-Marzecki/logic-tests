import {Transaction} from "../Model";

interface TransactionBasic {
  amount: number,
  category: string,
  time: number,
}
var transacts = [
  {
    id: 3,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:34:30.000Z'
  },
  {
    id: 1,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:33:00.000Z'
  },
  {
    id: 6,
    sourceAccount: 'A',
    targetAccount: 'C',
    amount: 250,
    category: 'other',
    time: '2018-03-02T10:33:05.000Z'
  },
  {
    id: 4,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:36:00.000Z'
  },
  {
    id: 2,
    sourceAccount: 'A',
    targetAccount: 'B',
    amount: 100,
    category: 'eating_out',
    time: '2018-03-02T10:33:50.000Z'
  },
  {
    id: 5,
    sourceAccount: 'A',
    targetAccount: 'C',
    amount: 250,
    category: 'other',
    time: '2018-03-02T10:33:00.000Z'
  }
];
const transactsExpects = [
  [
    {
      id: 1,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:33:00.000Z"
    },
    {
      id: 2,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:33:50.000Z"
    },
    {
      id: 3,
      sourceAccount: "A",
      targetAccount: "B",
      amount: 100,
      category: "eating_out",
      time: "2018-03-02T10:34:30.000Z"
    }
  ],
  [
    {
      id: 5,
      sourceAccount: "A",
      targetAccount: "C",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:33:00.000Z"
    },
    {
      id: 6,
      sourceAccount: "A",
      targetAccount: "C",
      amount: 250,
      category: "other",
      time: "2018-03-02T10:33:05.000Z"
    }
  ]
];




// https://gist.github.com/camisetags/10b5656411c683646193acdbb606535e
export const getBalanceByCategoryInPeriod = (
    transactionsList: Transaction[],
    category: string,
    startTime: string,
    endTime: string
) :number=> {

//  czy potrzebne?
function setEndDate(date) {
  date = date ? new Date(date) : new Date();
  // Zwraca godziny dla określonej daty stosownie do czasu uniwersalnego.
  if (date.getUTCHours() <= 0){
    date.setDate(date.getDate() + 1);
    date.setHours(0);
    date.setMinutes(0);
  }
  // convert date to object
  return Date.parse(date);

}

  let startDate : number= Date.parse(startTime);
  let endDate :number = Date.parse(endTime);

  const transactionBasic :TransactionBasic[] = transactionsList.map((transfer:Transaction) => {
    const { id, sourceAccount, targetAccount, ...transactionBasic } = transfer;
    return {
      ...transactionBasic,
      time: Date.parse(transactionBasic.time)
    };
    })

  const transactionInTime:TransactionBasic[] = transactionBasic.filter((transfer:TransactionBasic) =>
      (transfer.category === category &&
          (transfer.time >= startDate && transfer.time <= endDate))
  )

  const balance : number= transactionInTime.reduce((cumulatedBalance:number, transfer:TransactionBasic) => cumulatedBalance + transfer.amount, 0);
  
  return balance;
      }