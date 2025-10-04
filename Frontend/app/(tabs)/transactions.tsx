import React, { useState } from 'react';
import { View, Text, ScrollView, RefreshControl, StyleSheet } from 'react-native';
import { useTransactionStore } from '@store/useTransactionStore';
import { TransactionCard } from '@components/cards/TransactionCard';
import { Colors } from '@constants/Colors';

export default function Transactions() {
  const { transactions, fetchTransactions, loading } = useTransactionStore();
  const [filter, setFilter] = useState('all');

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>All Transactions</Text>
      {/* TODO: Implement filtering UI based on the 'filter' state */}
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchTransactions} />
        }
      >
        {transactions.length === 0 ? (
          <Text style={styles.noTransactionsText}>No transactions yet. Start adding some!</Text>
        ) : (
          transactions.map((tx) => (
            <TransactionCard
              key={tx.id}
              tx={tx}
              onDelete={() => null}
              onEdit={() => null}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 20, // Adjust for header spacing
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  noTransactionsText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: Colors.textSecondary,
  },
});
