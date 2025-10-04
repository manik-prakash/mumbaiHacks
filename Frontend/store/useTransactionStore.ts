import { create } from 'zustand';
import { Transaction } from '../types';


interface TransactionState {
transactions: Transaction[];
loading: boolean;
fetchTransactions: () => Promise<void>;
addTransaction: (t: Transaction) => void;
deleteTransaction: (id: string) => void;
}


export const useTransactionStore = create<TransactionState>((set) => ({
transactions: [],
loading: false,
fetchTransactions: async () => {
set({ loading: true });
try {
const data = (await import('../data/mockTransactions.json')).default as Transaction[];
set({ transactions: data });
} catch (e) {
console.error(e);
} finally {
set({ loading: false });
}
},
addTransaction: (t) => set((s) => ({ transactions: [t, ...s.transactions] })),
deleteTransaction: (id) => set((s) => ({ transactions: s.transactions.filter((x) => x.id !== id) }))
}));
