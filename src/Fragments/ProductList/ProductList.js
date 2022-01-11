import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../Styles/Index';
import ProductBox from '../Product/ProductBox';

const ProductList = ({ products, title }) => {
    if (!products || products?.length === 0)
        return (
            <Text style={{ height: 300, textAlign: 'center', textAlignVertical: 'center', backgroundColor: 'white' }}>
                Loading...
            </Text>
        );
    return (
        <View style={{ marginVertical: 30 }}>
            <Text style={Styles.Title}>{title}</Text>
            <FlatList
                data={products}
                horizontal
                contentContainerStyle={{ display: 'flex' }}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <ProductBox ImageSrc={item.image} Title={item.title} Price={item.price} Width={170} />
                )}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    Title: {
        paddingHorizontal: 15,
        fontWeight: '600',
        color: Colors.Dark,
        fontSize: 20,
    },
});

export default ProductList;
