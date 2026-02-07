import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function SearchScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Search Screen</ThemedText>
      <ThemedText>This is the search screen placeholder</ThemedText>
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

