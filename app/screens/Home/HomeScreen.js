/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from 'react-native';

import LOGO from './logo.png';

const HomeScreen = props => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView>
        <Image style={styles.logo} source={LOGO} />
        <Text style={styles.title}>Characters list</Text>
        <FlatList
          style={styles.charactersList}
          data={props.characters}
          renderItem={({item}) => {
            const character = item;
            console.log(character.image);
            return (
              <TouchableOpacity
                onPress={() => console.log('me tocaste')}
                style={styles.characterRow}>
                <Image
                  style={styles.characterImage}
                  source={{uri: character.image}}
                />
                <Text style={styles.characterName}>{character.name}</Text>
              </TouchableOpacity>
            );
          }}></FlatList>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  charactersList: {
    height: 550,
  },
  characterRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  characterName: {
    color: 'white',
    fontSize: 24,
    padding: 10,
  },
  characterImage: {
    width: 50,
    height: 50,
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#232323',
    paddingHorizontal: 12,
  },
  logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: '90%',
  },
});

export default HomeScreen;
