import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>Home</ThemedText>
        
        <TouchableOpacity 
          style={styles.section}
          onPress={() => router.push('/annual-plan')}
        >
          <ThemedText type="subtitle">Annual Plan</ThemedText>
          <ThemedText>Tap to view annual plan screen</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.section}
          onPress={() => router.push('/almanac')}
        >
          <ThemedText type="subtitle">Almanac</ThemedText>
          <ThemedText>Tap to view almanac screen</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.section}
          onPress={() => router.push('/media')}
        >
          <ThemedText type="subtitle">Media</ThemedText>
          <ThemedText>Tap to view media screen</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.section}
          onPress={() => router.push('/current-affairs')}
        >
          <ThemedText type="subtitle">Current Affairs</ThemedText>
          <ThemedText>Tap to view current affairs screen</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 20,
  },
  title: {
    marginBottom: 20,
  },
  section: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    marginBottom: 15,
  },
});
