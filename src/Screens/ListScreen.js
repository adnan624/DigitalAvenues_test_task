import React, { useEffect, useState } from 'react';
import { FlatList, Text, ActivityIndicator, View, Button, TextInput, StyleSheet, RefreshControl } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems, selectItem } from '../Redux/actions';
import ListItem from '../Components/Listitem';

const ListScreen = ({ navigation }) => {
    const { items, loading, error } = useSelector(state => state);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        dispatch(fetchItems(page, searchQuery));
    }, [dispatch, page, searchQuery]);

    const renderItem = ({ item, index }) => {
        return (
            <ListItem
                item={item}
                onPress={() => {
                    dispatch(selectItem(item))
                    navigation.navigate('DetailScreen')
                }}
            />
        );
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setPage(1);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        setPage(1);
        dispatch(fetchItems(1, searchQuery))
            .then(() => setRefreshing(false))
            .catch(() => setRefreshing(false));
    };

    const renderList = () => {
        if (loading && page === 1) {
            return <ActivityIndicator size={50} style={styles.activityIndicator} />;
        }

        if (error) {
            return <Text style={styles.errorText}>Error!</Text>;
        }

        return (
            <FlatList
                data={items.entries}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListFooterComponent={() => (
                    loadingMore ? <ActivityIndicator size={50} style={styles.activityIndicator} /> : null
                )}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                }
            />
        );
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                onChangeText={handleSearch}
                value={searchQuery}
                placeholderTextColor="#999"
                underlineColorAndroid="transparent"
            />
            {renderList()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 2,
        paddingLeft: 10,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        color: '#333',

    },
    activityIndicator: {
        alignSelf: 'center',
        marginVertical: 20,
        justifyContent: 'center',
        flex: 1
    },
    errorText: {
        alignSelf: 'center',
        marginVertical: 20,
        fontSize: 18,
        color: 'red',
    },
});

export default ListScreen;
