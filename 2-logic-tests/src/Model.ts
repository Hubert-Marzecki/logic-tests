export interface Transaction {
    id: number
    sourceAccount: string,
    targetAccount: string,
    amount: number,
    category: string,
    time: string,
}