interface Transaction {
  id: number
  sourceAccount: string,
  targetAccount: string,
  amount: number,
  category: string,
  time: string,
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
  transactionsList:Transaction[] = [],
  category:string,
  start:any,
  end:any
) :number=> {

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
// resonable - get time
  start = Date.parse(start);
  end = setEndDate(end); 
  
  const trans = transactionsList.map((transaction) => {
      const { id, sourceAccount, targetAccount, ...cleanTransaction } = transaction;
      return {
        ...cleanTransaction,
        // return date of transaction
        time: Date.parse(cleanTransaction.time)
      };

    }).filter((transaction) =>
    // chceck is end false
      !!end
      ? (transaction.category === category && 
        (transaction.time >= start && transaction.time <= end))
      : (transaction.category === category && transaction.time >= start)
    ).reduce((totalBalance, transaction) => totalBalance + transaction.amount, 0);
  
  return trans;
      }