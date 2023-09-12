import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const ListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Title: </Text>
        <Text style={[styles.value,{left: 50}]}>{item.API}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Description: </Text>
        <Text style={styles.value}>{item.Description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#faf0e6', 
    marginBottom: 10,
    borderRadius: 10, 
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 5
  },
  row: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 5,
   
  },
  label: {
    marginRight: 5,
    fontWeight: 'bold',
    color: '#333', 
    fontSize: 16
  },
  value: {
    color: '#800000',
    maxWidth: 180
  },
});

export default ListItem;
