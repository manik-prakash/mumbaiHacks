import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Transaction } from "../../types/index";
import { Colors } from '@constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  tx: Transaction;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export const TransactionCard: React.FC<Props> = ({ tx, onEdit, onDelete }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{tx.title}</Text>
        <Text style={styles.date}>
          {new Date(tx.date).toLocaleDateString()}
        </Text>
      </View>
      <View style={styles.rightContent}>
        <Text style={[styles.amount, { color: tx.type === 'income' ? Colors.success : Colors.danger }]}>
          {tx.type === 'income' ? '+' : '-'}₹{tx.amount}
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => onEdit?.(tx.id)} style={styles.actionButton}>
            <MaterialIcons name="edit" size={18} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete?.(tx.id)} style={styles.actionButton}>
            <MaterialIcons name="delete" size={18} color={Colors.danger} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: Colors.surface,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  date: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
  },
  actionButton: {
    padding: 5,
  },
});
