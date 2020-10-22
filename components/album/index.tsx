import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

export type AlbumProps = {
    album: {
        id: string,
        imageUri: string,
        artistsHeadline: string
    }
}

export default ({ album : { imageUri, artistsHeadline }} : AlbumProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <Text style={styles.text}> { artistsHeadline } </Text>
        </View>
    )
}