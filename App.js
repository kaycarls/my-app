import React from 'react';
import { StyleSheet, View } from 'react-native';
import TaskManager from './components/TaskManager';

export default function App() {
  return (
    <View style={styles.container}>
      <TaskManager />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
