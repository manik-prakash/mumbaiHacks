import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { Colors } from '@constants/Colors';


interface Props {
  title: string;
  data: { value: number; label: string; color?: string }[];
}


export const ChartCard: React.FC<Props> = ({ title, data }) => {
  // Define a more vibrant color palette for the chart
  const chartColors = [
    Colors.primary,
    Colors.accent,
    Colors.success,
    Colors.warning,
    Colors.danger,
    '#8884d8', // A different shade of purple
    '#82ca9d', // A different shade of green
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <PieChart
        data={data.map((d, index) => ({
          value: d.value,
          color: d.color || chartColors[index % chartColors.length],
          label: d.label,
          // Optional: add a text color for the label if needed
          // textShiftX: -5,
          // textShiftY: -5,
          // textColor: Colors.textPrimary,
        }))}
        donut
        radius={80}
        innerRadius={50}
        centerLabelComponent={() => (
          <Text style={styles.centerLabelText}>Total</Text>
        )}
        sectionAutoFocus
        focusOnPress
        toggleFocusOnPress
        showText
        textColor={Colors.textPrimary}
        textSize={12}
        fontWeight="bold"
        labelsPosition="outward"
        // Optional: Add a legend or tooltip if needed
      />
    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: Colors.surface,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center', // Center the chart
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 20,
  },
  centerLabelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerLabelText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  centerLabelValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
});
