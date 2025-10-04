import React, { useEffect, useMemo } from 'react';
import { View, Text, ScrollView, RefreshControl, StyleSheet } from 'react-native';
import { BalanceCard } from '@components/cards/BalanceCard';
import { ChartCard } from '@components/charts/ChartCard';
import { TransactionCard } from '@components/cards/TransactionCard';
import { useTransactionStore } from '@store/useTransactionStore';
import { Colors } from '@constants/Colors';

export default function Home() {
  const { transactions, fetchTransactions, loading } = useTransactionStore();

  useEffect(() => {
    fetchTransactions();
  }, []);

  const balance = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === 'income')
      .reduce((s, t) => s + t.amount, 0);
    const expenses = transactions
      .filter((t) => t.type === 'expense')
      .reduce((s, t) => s + t.amount, 0);
    return { total: income - expenses, income, expenses };
  }, [transactions]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={fetchTransactions} />
      }
      contentContainerStyle={styles.scrollViewContent}
      style={styles.container}
    >
      <BalanceCard
        balance={balance.total}
        income={balance.income}
        expenses={balance.expenses}
      />
      <ChartCard
        title="Monthly spending"
        data={[
          { value: 60, label: 'Food' },
          { value: 40, label: 'Transport' },
        ]}
      />
      <View style={styles.recentTransactionsContainer}>
        <Text style={styles.recentTransactionsTitle}>Recent transactions</Text>
        {transactions.slice(0, 5).map((tx) => (
          <TransactionCard
            key={tx.id}
            tx={tx}
            onDelete={() => null}
            onEdit={() => null}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollViewContent: {
    padding: 16,
  },
  recentTransactionsContainer: {
    marginTop: 20,
  },
  recentTransactionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 15,
  },
});
