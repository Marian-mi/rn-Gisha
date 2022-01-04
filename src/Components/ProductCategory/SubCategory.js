import React, { useState } from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'


const SubCategory = ({ SubCategoryList }) => {
    return (
        <View>
            <FlatList
                data={SubCategoryList}
                renderItem={({ item }) => <SubCategoryBox Title={item.title} ImageUrl={item.image} />}
            />
        </View>
    )
}

const SubCategoryBox = ({ Title, ImageUrl }) => (
    <View style={SubCategoryStyles.Box}>
        <Text style={{ flex: 4, textAlign: 'left' }}>{Title}</Text>
        <View style={{ flex: 1 }} />
        <Image style={{ flex: 1 }} source={{ uri: ImageUrl, width: 30, height: 50 }} />
    </View>
)


const SubCategoryStyles = StyleSheet.create({
    Contianer: {
    },
    Box: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 2,
    }
})

export default SubCategory