import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Contact} from '../../interfaces/contactsInterface';

export default function CardContact({item}: {item: Contact}): JSX.Element {
  return (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.picture.medium}} style={styles.itemImage} />

      <View style={{flexDirection: 'column'}}>
        <Text style={styles.itemTitle}>
          {item.name.first + ' ' + item.name.last}
        </Text>
        <Text style={[styles.itemTitle, {fontSize: 13}]}>Disponible</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    //Estilos para el itemContainer
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginBottom: 1,
    backgroundColor: '#fff',
  },
  itemTitle: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    marginLeft: 10,
    color: 'gray',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
