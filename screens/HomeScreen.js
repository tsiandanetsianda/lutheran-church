import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('AnnualPlan')}>
        <Text style={styles.sectionTitle}>Annual plan</Text>
        <Text style={styles.placeholder}>Section: Annual plan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Almanac')}>
        <Text style={styles.sectionTitle}>Almanac</Text>
        <Text style={styles.placeholder}>Section: Almanac</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Media')}>
        <Text style={styles.sectionTitle}>Media</Text>
        <Text style={styles.placeholder}>Section: Media</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('CurrentAffairs')}>
        <Text style={styles.sectionTitle}>Current affairs</Text>
        <Text style={styles.placeholder}>Section: Current affairs</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  section: { padding: 16, marginBottom: 12, backgroundColor: '#fff', borderRadius: 8 },
  sectionTitle: { fontSize: 18, fontWeight: '600' },
  placeholder: { fontSize: 14, color: '#666', marginTop: 4 },
});
