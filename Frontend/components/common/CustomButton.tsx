import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Colors } from '@constants/Colors';

type Variant = 'primary' | 'secondary' | 'outline';

interface Props {
  title: string;
  variant?: Variant;
  onPress?: () => void;
  loading?: boolean;
  style?: ViewStyle;
}

export const CustomButton: React.FC<Props> = ({
  title,
  variant = 'primary',
  onPress,
  loading,
  style,
}) => {
  const bg =
    variant === 'primary'
      ? Colors.primary
      : variant === 'secondary'
        ? Colors.accent
        : 'transparent';
  const textColor = variant === 'outline' ? Colors.primary : Colors.surface;
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={[
        styles.btn,
        {
          backgroundColor: bg,
          borderColor: variant === 'outline' ? Colors.primary : 'transparent',
        },
        style,
      ]}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={[styles.txt, { color: textColor }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
