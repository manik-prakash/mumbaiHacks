import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { InputField } from '@components/common/InputField';
import { CustomButton } from '@components/common/CustomButton';
import { useRouter } from 'expo-router';
import { Colors } from '@constants/Colors';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [incomeType, setIncomeType] = useState<'gig' | 'informal' | 'regular'>(
    'gig',
  );
  const router = useRouter();

  const handleRegister = async () => {
    // TODO: call register API
    router.replace('/(tabs)/index');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Your PaisaMitra Account</Text>
      <InputField
        label="Name"
        value={name}
        onChange={setName}
        placeholder="Your full name"
        style={styles.inputField}
      />
      <InputField
        label="Email"
        value={email}
        onChange={setEmail}
        placeholder="you@example.com"
        keyboardType="email-address"
        style={styles.inputField}
      />
      <InputField
        label="Password"
        value={password}
        onChange={setPassword}
        placeholder="Password"
        secureTextEntry={true}
        style={styles.inputField}
      />
      {/* Income type selection can be improved with a custom picker component */}
      <CustomButton title="Register" onPress={handleRegister} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 30,
    textAlign: 'center',
  },
  inputField: {
    marginBottom: 16,
  },
  button: {
    marginTop: 24,
    width: '100%',
  },
});
