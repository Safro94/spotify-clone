import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { API_URL } from '@env';

import AlbumCategory from '../components/albumCategory';

import axios from '../utils/axios';

export default () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = () => {
      axios(`${API_URL}/albums`).then(
        (res) => {
          setAlbums(res.data);
        },
        (err) => console.log(err)
      );
    };

    fetchAlbums();
  }, []);

  return (
    <View style={styles.container}>
      {albums && (
        <FlatList
          data={albums}
          renderItem={({ item }) => (
            <AlbumCategory title={item.title} albums={item.albums} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
