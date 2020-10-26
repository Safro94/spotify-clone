import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import AlbumComponent from '../album';

import styles from './styles';
import { Song } from '../../types';

export type SongListItemProps = {
  song: Song;
};

export default ({ song: { imageUri, title, artist } }: SongListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.artist}> {artist} </Text>
      </View>
    </View>
  );
};
