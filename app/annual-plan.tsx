import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function AnnualPlanScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Annual Plan</ThemedText>
      <ThemedText>This is the annual plan screen placeholder</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

