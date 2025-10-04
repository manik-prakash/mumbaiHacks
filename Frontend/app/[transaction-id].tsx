import React from 'react';
import { View, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function TransactionDetails() {
  const params = useLocalSearchParams();
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Transaction ID: {params.id}</Text>
      {/* TODO: load transaction and show details */}
    </View>
  );
}
