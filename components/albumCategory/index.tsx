import React from 'react';
import { View, Text, FlatList } from 'react-native';

import AlbumComponent from '../album'

import styles from './styles';
import { Album } from '../../types';

export type AlbumCategoryProps = {
    title: string,
    albums: [Album],
}
  
export default ({ title, albums } : AlbumCategoryProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> { title } </Text>
            <FlatList 
                data={albums}
                renderItem={({ item }) => <AlbumComponent album={item} />}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        </View>
    )
}
