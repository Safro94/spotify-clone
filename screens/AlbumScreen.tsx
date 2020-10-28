import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { API_URL } from '@env';

import SongListItem from '../components/songListItem';
import AlbumHeader from '../components/albumHeader';

import axios from '../utils/axios';

export default () => {
  const {
    params: { id },
  } = useRoute();

  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const getAlbumDetail = () => {
      axios(`${API_URL}/albums/${id}`).then(
        (res) => {
          setAlbum(res.data);
        },
        (err) => console.log(err)
      );
    };

    getAlbumDetail();
  }, [id]);

  return (
    <View>
      {album && (
        <FlatList
          data={album?.songs}
          renderItem={({ item }) => <SongListItem song={item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => <AlbumHeader album={album} />}
        />
      )}
    </View>
  );
};
