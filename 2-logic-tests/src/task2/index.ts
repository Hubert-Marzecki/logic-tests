interface Transaction {
  id: number
  sourceAccount: string,
  targetAccount: string,
  amount: number,
  category: string,
  time: string,
}
export const findDuplicateTransactions = (transactions:any[] = []) :Transaction[]=> {

  const difference = (t1:string, t2:any) :any => {
    // abs zwraca wartość bezwzględną danej liczby.
    return Math.abs(<any>new Date(t1).getTime() - <any>new Date(t2))
   }

   function compareObjects(obj1:Transaction,obj2:Transaction){
    return obj1.id !== obj2.id 
           &&  obj1.sourceAccount === obj2.sourceAccount
           &&  obj1.targetAccount === obj2.targetAccount
           &&  obj1.amount === obj2.amount
           &&  obj1.category === obj2.category
  }
  // The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
  transactions.sort(({ time: a }, { time: b }) => a.localeCompare(b))
  let output = [];
  let grouped =[];

  for(let i=0; i<transactions.length; i++){
    let groups =[transactions[i]];
    if(!grouped.includes(transactions[i]) ){
      for(let j=0; j<transactions.length; j++){
        if(compareObjects(transactions[i],transactions[j])){
          if( difference(groups[groups.length-1].time,transactions[j].time) < 60000 ){
            groups.push(transactions[j])
            grouped.push(transactions[j])
          }
        }
      }
    }
    if(groups.length > 1 ) output.push(groups);
  }
  
  return output;
}



