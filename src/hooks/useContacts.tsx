import React, {useEffect, useState} from 'react';
import {getUsers} from '../api/Users';
import {Contact} from '../interfaces/contactsInterface';

const useContacts = (): Object => {
  const [data, setData] = useState<Contact[]>([]);
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

  return {
    data,
    loading,
  };
};

export default useContacts;
