import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Cesta  from "./src/telas/Cesta.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Oi!</Text>
      <StatusBar style="auto" />
      <Cesta />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
