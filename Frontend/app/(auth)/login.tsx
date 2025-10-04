import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { InputField } from '@components/common/InputField';
import { CustomButton } from '@components/common/CustomButton';
import { useAuthStore } from '@store/useAuthStore';
import { useRouter } from 'expo-router';
import { Colors } from '@constants/Colors';

export default function Login() {
  const login = useAuthStore((s) => s.login);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // Directly log in with mock user
      await login('mock@example.com', 'password');
      router.replace({ pathname: '/(tabs)' });
    } catch (e) {
      alert('Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to PaisaMitra</Text>
      <Text style={styles.subtitle}>Your personal finance companion</Text>
      {/* For now, we'll keep the mock login. In a real app, we'd have email/password fields. */}
      <CustomButton title="Login as Mock User" onPress={handleLogin} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: Colors.textSecondary,
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    marginTop: 20,
  },
});
