import { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const t = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 2000);
    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash-icon.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.text}>Opening screen – app logo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  logo: { width: 160, height: 160 },
  text: { marginTop: 16, fontSize: 14, color: '#666' },
});
