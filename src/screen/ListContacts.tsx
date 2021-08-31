import React from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import CardContact from '../components/Contacto/CardContact';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import useContacts from '../hooks/useContacts';

export default function ListContact(): JSX.Element {
  const {loading, data} = useContacts();

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <View>
      <FlatList
        ListHeaderComponent={HeaderComponent}
        data={data}
        renderItem={CardContact}
        keyExtractor={item => item.email}
      />
    </View>
  );
}
