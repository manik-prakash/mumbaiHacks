export interface User {
id: string;
name: string;
email: string;
avatarUrl?: string;
currency?: string;
language?: string;
incomeStreams?: IncomeStream[];
}


export interface IncomeStream {
id: string;
name: string;
type: 'gig' | 'informal' | 'regular';
averageMonthly?: number;
}   


export type TransactionType = 'income' | 'expense';


export interface Transaction {
id: string;
title: string;
amount: number;
type: TransactionType;
categoryId: string;
date: string; // ISO
notes?: string;
}


export interface Category {
id: string;
name: string;
icon?: string; // name from vector-icons
color?: string;
type: TransactionType;
}


export interface Goal {
id: string;
title: string;
targetAmount: number;
currentAmount: number;
dueDate?: string; // ISO
milestones?: { id: string; title: string; amount: number; reached: boolean }[];
}


export interface Insight {
id: string;
title: string;
body: string;
}