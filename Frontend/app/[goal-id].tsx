import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function GoalDetails() {
  const params = useLocalSearchParams();
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Goal ID: {params.id}</Text>
      {/* TODO: render milestones, actions, timeline */}
    </View>
  );
}
