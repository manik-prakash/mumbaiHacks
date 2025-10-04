import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Onboarding() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.h}>Welcome to PocketCoach</Text>
      <Text style={styles.p}>
        Autonomous financial coaching for gig workers
      </Text>
      <Image
        source={{ uri: 'https://placehold.co/300x200' }}
        style={{ width: 300, height: 200, marginVertical: 20 }}
      />
      <Button
        title="Get Started"
        onPress={() => router.push('/(auth)/login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  h: { fontSize: 24, fontWeight: '700' },
  p: { marginTop: 8 },
});
