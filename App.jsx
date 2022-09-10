/*========================================
        Import Components
========================================*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { OpeningQuote } from "./src/screens/OpeningQuote";

export default function App() {
  return <OpeningQuote/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
