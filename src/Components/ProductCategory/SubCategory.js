import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native'
import { Axios } from '../../../App';


const SubCategory = ({ mainID }) => {
    const [items, setItems] = useState(null)
    const navigation = useNavigation()

    useEffect(() => {
        ; (async () => {
            try {
                const response = await Axios.post("/category/getby", { ParentID: mainID })
                const data = await response.data

                setItems(data)
            }
            catch (err) {

            }
        })();
    }, [])

    if (!items || items?.length === 0) return <View><Text>No Data found</Text></View>

    return (
        <View>
            <FlatList
                data={items}
                renderItem={({ item }) =>
                    <Pressable onPress={() => navigation.navigate("Search", { LinkID: item.ID, Title: item.Title})}>
                        <SubCategoryBox
                            Title={item.Title}
                            ImageUrl={"http://192.168.1.104:8182" + item.Picture}
                        />
                    </Pressable>
                }
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