import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import AlbumCategory from '../components/albumCategory';

const albumCategories = [
  {
    id: '1',
    title: 'Happy Vibes',
    albums: [
      {
        id: '1',
        imageUri:
          'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii',
      },
      {
        id: '2',
        imageUri:
          'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
        artistsHeadline: 'Post Malone, Drake, Eminem',
      },
      {
        id: '3',
        imageUri:
          'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
        artistsHeadline: 'Journey, Escape, Avicii',
      },
      {
        id: '4',
        imageUri:
          'https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg',
        artistsHeadline: 'Bob Marley, Cardi B, Stas Mihailov',
      },
    ],
  },
  {
    id: '2',
    title: 'Popular Playlists',
    albums: [
      {
        id: '5',
        imageUri:
          'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii',
      },
      {
        id: '6',
        imageUri:
          'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
        artistsHeadline: 'Post Malone, Drake, Eminem',
      },
      {
        id: '7',
        imageUri:
          'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
        artistsHeadline: 'Journey, Escape, Avicii',
      },
    ],
  },
  {
    id: '3',
    title: 'Shows to try',
    albums: [
      {
        id: '8',
        imageUri:
          'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii',
      },
      {
        id: '9',
        imageUri:
          'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
        artistsHeadline: 'Post Malone, Drake, Eminem',
      },
      {
        id: '10',
        imageUri:
          'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
        artistsHeadline: 'Journey, Escape, Avicii',
      },
    ],
  },
  {
    id: '4',
    title: 'Workout',
    albums: [
      {
        id: '11',
        imageUri:
          'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii',
      },
      {
        id: '12',
        imageUri:
          'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
        artistsHeadline: 'Post Malone, Drake, Eminem',
      },
      {
        id: '13',
        imageUri:
          'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
        artistsHeadline: 'Journey, Escape, Avicii',
      },
    ],
  },
];

export default () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item.id}
      />
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
