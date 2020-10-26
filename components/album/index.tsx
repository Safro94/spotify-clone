import React from 'react';
import { Image, Text, View, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Album } from '../../types';

export type AlbumProps = {
  album: Album;
};

export default ({ album: { id, imageUri, artistsHeadline } }: AlbumProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('AlbumScreen', { id });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <Text style={styles.text}> {artistsHeadline} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
