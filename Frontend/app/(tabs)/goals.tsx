import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import goalsData from '../../data/mockGoals.json';
import { Colors } from '@constants/Colors';
import { useRouter } from 'expo-router';

export default function Goals() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Your Savings Goals</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {goalsData.length === 0 ? (
          <Text style={styles.noGoalsText}>No goals set yet. Start saving!</Text>
        ) : (
          goalsData.map((g) => {
            const progress =
              g.targetAmount > 0
                ? Math.min(1, Math.max(0, g.currentAmount / g.targetAmount))
                : 0;

            return (
              <TouchableOpacity
                key={g.id}
                style={styles.goalCard}
                onPress={() => router.push(`/[goal-id]?id=${g.id}`)}
              >
                <Text style={styles.goalTitle}>{g.title}</Text>
                <Text style={styles.goalAmount}>
                  ₹{g.currentAmount.toFixed(2)} / ₹{g.targetAmount.toFixed(2)}
                </Text>

                {/* ✅ Cross-platform progress bar */}
                <Progress.Bar
                  progress={progress}
                  width={null} // fills parent container
                  height={8}
                  color={Colors.primary}
                  unfilledColor="#e0e0e0"
                  borderWidth={0}
                  borderRadius={4}
                  style={styles.progressBar}
                />

                <Text style={styles.goalProgress}>
                  {g.targetAmount > 0 ? (progress * 100).toFixed(0) : 0}% Achieved
                </Text>
              </TouchableOpacity>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 20,
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
  goalCard: {
    padding: 16,
    backgroundColor: Colors.surface,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  goalAmount: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  progressBar: {
    marginTop: 5,
    marginBottom: 5,
  },
  goalProgress: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '600',
    textAlign: 'right',
  },
  noGoalsText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: Colors.textSecondary,
  },
});
