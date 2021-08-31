import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import CardContact from '../components/Contact/CardContact';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import {getUsers} from '../api/Users';

export default function ListContact(): JSX.Element {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then(res => {
      if (res && res.results) {
        setData(res.results);
        setLoading(false);
      }
      data;
    });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <View>
      <FlatList
        ListHeaderComponent={HeaderComponent}
        data={data}
        renderItem={CardContact}
      />
    </View>
  );
}
