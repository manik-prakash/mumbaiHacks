import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useAuthStore } from '@store/useAuthStore';

export default function Profile() {
  const user = useAuthStore((s) => s.user);

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 12 }}>
        Profile
      </Text>
      <View style={{ backgroundColor: '#fff', padding: 12, borderRadius: 12 }}>
        <Text style={{ fontSize: 18 }}>{user?.name || 'Guest'}</Text>
        <Text style={{ color: '#666' }}>{user?.email}</Text>
      </View>
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontWeight: '700', marginBottom: 8 }}>Preferences</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: 12,
            borderRadius: 12,
          }}
        >
          <Text>Dark mode</Text>
          <Switch value={false} onValueChange={() => null} />
        </View>
      </View>
    </ScrollView>
  );
}
