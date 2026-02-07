import { View, Text, StyleSheet } from 'react-native';

export default function AnnualPlanScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholder}>Annual Plan screen – placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  placeholder: { fontSize: 18, color: '#333' },
});
