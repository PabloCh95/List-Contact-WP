import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HeaderComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contactos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#075E54',
    justifyContent: 'flex-start',
    height: 45,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
  },
});
