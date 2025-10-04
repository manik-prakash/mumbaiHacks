import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@constants/Colors';

interface Props {
  balance: number;
  income: number;
  expenses: number;
}

export const BalanceCard: React.FC<Props> = ({ balance, income, expenses }) => {
  return (
    <View style={styles.card} accessibilityRole="summary">
      <Text style={styles.title}>Current Balance</Text>
      <Text style={styles.balance}>₹{balance.toFixed(2)}</Text>
      <View style={styles.row}>
        <Text style={styles.income}>Income: ₹{income.toFixed(0)}</Text>
        <Text style={styles.expense}>Expenses: ₹{expenses.toFixed(0)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: Colors.surface,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: { color: Colors.textSecondary, fontSize: 16, marginBottom: 4 },
  balance: { color: Colors.textPrimary, fontSize: 32, fontWeight: 'bold', marginBottom: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  income: { color: Colors.success, fontSize: 16, fontWeight: '600' },
  expense: { color: Colors.danger, fontSize: 16, fontWeight: '600' },
});
