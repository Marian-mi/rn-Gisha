import { nanoid } from 'nanoid/non-secure'
import React, { useContext, useEffect, useRef } from 'react'
import { View, Text, Pressable, Image, useWindowDimensions } from 'react-native'
import { Axios } from '../../../App'
import Carousel from '../../Fragments/Carousel/Carousel'
import MainHeader from '../../Fragments/Headers/MainHeader'
import Banner from '../../Fragments/images/Banner'
import TextLinkView from '../../Fragments/Links/TextLink'
import { DynamicLink } from '../../config'
import Gallery from '../../Fragments/images/Gallery'
import { ScrollView } from 'react-native-gesture-handler'
import ProductList from '../../Fragments/ProductList/ProductList'
import DotsLoader from '../../Fragments/Loaders/DotsLoader'
import AppContext from '../../ContextProviders/AppContext'
import { HomeApi } from './Api'

const Home = ({ navigation }) => {
    const { slider, setApp, text, isFetching, banner, gallery, content } = useContext(AppContext)
    const { width } = useWindowDimensions()

    const Api = useRef(new HomeApi(setApp)).current

    useEffect(() => {
        Api.loadPageContent()
    }, [])

    const renderItem = item => {
        return (
            <Pressable key={item.ID} onPress={() => navigation.navigate(DynamicLink.LinkTypes[item.LinkType], { LinkID: item.LinkID })}>
                <Image source={{ uri: DynamicLink.PICTURE_PATH + item.Picture, width, height: 250 }} />
            </Pressable>
        );
    };

    if (isFetching) return <DotsLoader />

    return (
        <ScrollView contentContainerStyle={{ paddingVertical: 55 }}>
            <MainHeader />

            <Carousel
                data={slider}
                renderer={renderItem}
                scrollDisabled
                autoplay={{
                    duration: 5000,
                }}
                keyExtractor={(item) => item.ID}
            />

            <TextLinkView data={text} />

            <ProductList
                products={content[0].Items}
                title={content[0].Title}
                showMoreButton={content[0].ContentType === 3}
                showMoreAction={() => navigation.navigate("Search", { LinkID: content[0].ContentID, Title: content[0].Title })}
                key={content[0].ContentID}
            />

            <Banner
                action={() => navigation.navigate("Search", { LinkID: banner[0].LinkID })}
                name={banner[0].Picture}
                key={banner[0].ID}
            />

            <Gallery items={gallery} />

            <Banner
                action={() => navigation.navigate("Search", { LinkID: banner[1].LinkID })}
                name={banner[1].Picture}
                key={banner[1].ID}
            />

            {content.slice(1).map(({ Items, Title, ContentType, ContentID }) => (
                <ProductList
                    products={Items}
                    title={Title}
                    showMoreButton={ContentType === 3}
                    showMoreAction={() => navigation.navigate("Search", { LinkID: ContentID, Title: Title })}
                    key={ContentID}
                />
            ))}

        </ScrollView>
    )
}


export default Home
