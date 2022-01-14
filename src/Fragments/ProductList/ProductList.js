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
                keyExtractor={(item) => item.ID}
                renderItem={({ item }) => (
                    <ProductBox ID={item.ID} ImageSrc={"http://192.168.1.104:8182" + item.PicturePath + item.PictureExt} Title={item.Title} Price={item.NewPrice} Width={170} />
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
