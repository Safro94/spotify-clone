import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Album } from '../../types';

export type AlbumHeaderProps = {
  album: Album;
};

export default ({
  album: { imageUri, name, by, numberOfLikes },
}: AlbumHeaderProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.name}> {name} </Text>
      <View style={styles.creatorContainer}>
        <Text style={styles.creator}> By {by} </Text>
        <Text style={styles.likes}> {numberOfLikes} </Text>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}> PLAY </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
