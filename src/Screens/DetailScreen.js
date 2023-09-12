import { StyleSheet, Text, View, Linking, ScrollView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const DetailScreen = () => {
  const selectedItem = useSelector(state => state.selectedItem);

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Detail Screen</Text>
      <View style={styles.box}>
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Title:</Text>
          <Text style={styles.text}>{selectedItem.API}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Category:</Text>
          <Text style={styles.text}>{selectedItem.Category}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.description}>{selectedItem.Description}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.label}>URL:</Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL(selectedItem.Link)}>
            {selectedItem.Link}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 16,
    width: '90%',
    maxWidth: 400,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'#ff7f50'
  },
  itemContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    // alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color:'#008b8b'
  },
  text: {
    fontSize: 18,
    color: '#333',
    maxWidth: 180
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    textAlign: 'justify',
    maxWidth: 180
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    maxWidth: 190
  },
});
