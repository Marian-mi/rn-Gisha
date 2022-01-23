import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native'
import { Axios } from '../../../App';
import { AppHelper } from '../../config';
import EmptyList from '../../Fragments/Informatic/EmtyList';
import DotsLoader from '../../Fragments/Loaders/DotsLoader';
import { ProductCategoryApi } from './Api';
import { SubCategoryStyles } from './Styles';


const SubCategory = ({ mainID }) => {
    const [items, setItems] = useState(null)
    const [isFetching, setIsFetching] = useState(true)
    
    const navigation = useNavigation()

    useEffect(() => {
        ; (async () => {
            try {
                setItems(await ProductCategoryApi.getSubCategories(mainID))
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setIsFetching(false)
            }
        })();
    }, [])

    if (isFetching) return <DotsLoader />

    if (!items || items?.length === 0) return <EmptyList text={"زیر دسته ای وجود ندارد!"} />

    return (
        <View>
            <FlatList
                data={items}
                renderItem={({ item }) =>
                    <Pressable onPress={() => navigation.navigate("Search", { LinkID: item.ID, Title: item.Title})}>
                        <SubCategoryBox
                            Title={item.Title}
                            ImageUrl={AppHelper.MapToServerPath(item.Picture)}
                        />
                    </Pressable>
                }
            />
        </View>
    )
}

const SubCategoryBox = ({ Title, ImageUrl }) => (
    <View style={SubCategoryStyles.Box}>
        <Text style={[{ flex: 4 }, SubCategoryStyles.Title]}>{Title}</Text>
        <View style={{ flex: 1 }} />
        <Image style={{ flex: 1 }} source={{ uri: ImageUrl, width: 30, height: 50 }} />
    </View>
)




export default SubCategory