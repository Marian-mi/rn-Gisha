import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { AppHelper } from '../../config';
import { Colors, Flex } from '../../Styles/Index';
import EmptyList from '../Informatic/EmtyList';
import ProductBox from '../Product/ProductBox';

const ProductList = ({ products, title, showMoreButton, showMoreAction }) => {
    if (!products || products?.length === 0)
        return null

    return (
        <View style={{ marginVertical: 30 }}>
            <View style={[Flex.Row, { justifyContent: 'space-between', paddingHorizontal: 15 }]}>
                <Text style={Styles.Title}>{title}</Text>
                {showMoreButton
                    && <Pressable onPress={() => showMoreAction()}>
                        <Text style={Styles.ShowMore}>لیست کامل</Text>
                    </Pressable>
                }
            </View>
            <FlatList
                data={products}
                horizontal
                keyExtractor={(item) => item.ID}
                style = {{ flexDirection: 'row-reverse'}}
                inverted = {products.length < 3}
                renderItem={({ item }) => (
                    <ProductBox ID={item.ID} ImageSrc={AppHelper.MapToServerPath(item.PicturePath + item.PictureExt)} Title={item.Title} Price={item.NewPrice} Width={170} />
                )}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    Title: {
        fontWeight: '600',
        color: Colors.Dark,
        fontSize: 16,
        fontFamily: "Samim",
    },
    ShowMore: {
        color: "#3ba0f2",
        fontWeight: "600",
        fontFamily: "Samim",
    }
});

export default ProductList;
