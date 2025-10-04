import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import insightsData from '../../data/mockInsights.json';

export default function Insights() {
  const [insights, setInsights] = useState(insightsData);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // In real app fetch personalized insights
    setTimeout(() => setRefreshing(false), 600);
  };

  return (
    <ScrollView
      contentContainerStyle={{ padding: 16 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 12 }}>
        Personalized insights
      </Text>
      {insights.map((ins) => (
        <View
          key={ins.id}
          style={{
            backgroundColor: '#fff',
            padding: 12,
            borderRadius: 12,
            marginBottom: 8,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '700' }}>{ins.title}</Text>
          <Text style={{ marginTop: 6 }}>{ins.body}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
