import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.teste}>Open up App.js to start working on your app!</Text>
      <Button
        title="Learn More"
        onPress={() => Alert.alert('Cannot press this one')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teste: {
    color: '#fff',
  }
});
