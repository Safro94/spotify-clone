import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';
import { Album } from '../../types';

export type AlbumProps = {
  album: Album;
};

export default ({ album: { imageUri, artistsHeadline } }: AlbumProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.text}> {artistsHeadline} </Text>
    </View>
  );
};
