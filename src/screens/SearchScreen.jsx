import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  return (
    <View style={{paddingHorizontal: 10}}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="I'm shopping for..."
        />
        <Ionicons
          name="search"
          size={24}
          color="#3F6065"
          style={styles.searchIcon}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
    width: '100%',
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
});
