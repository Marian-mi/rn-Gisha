import { nanoid } from 'nanoid/non-secure'
import React, { useContext, useEffect } from 'react'
import { View, Text, Pressable, Image, useWindowDimensions } from 'react-native'
import { Axios } from '../../../App'
import HomeContext from '../../ContextProviders/HomeContext'
import ProductContext from '../../ContextProviders/ProductContext'
import Carousel from '../../Fragments/Carousel/Carousel'
import MainHeader from '../../Fragments/Headers/MainHeader'
import Banner from '../../Fragments/images/Banner'
import TextLinkView from '../../Fragments/Links/TextLink'
import { DynamicLink } from '../../config'
import Gallery from '../../Fragments/images/Gallery'
import { ScrollView } from 'react-native-gesture-handler'

const Home = ({ navigation }) => {
    const { slider, setHome, text, isFetching, banner, gallery } = useContext(HomeContext)
    const { width } = useWindowDimensions()

    useEffect(() => {
        ; (async () => {
            try {
                const response = await Axios.post("/app/getall", JSON.stringify({ TagTake: 20 }))
                const data = await response.data;

                setHome((ps) => ({
                    ...ps,
                    slider: data.DynamicLinks.Sliders,
                    text: data.DynamicLinks.Texts,
                    banner: data.DynamicLinks.Banners,
                    gallery: data.DynamicLinks.Galleries,
                    isFetching: false
                }))
            }
            catch (err) {
            }

        })();
    }, [])

    const renderItem = item => {
        return (
            <Pressable key={item.ID} onPress={() => navigation.navigate(DynamicLink.LinkTypes[item.LinkType], { LinkID: item.LinkID })}>
                <Image source={{ uri: DynamicLink.PICTURE_PATH + item.Picture, width, height: 250 }} />
            </Pressable>
        );
    };


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

            {isFetching
                ? <View style={{ height: 30, backgroundColor: "rgba(0,0,0,0.3)" }} />
                : <TextLinkView data={text} />
            }

            {isFetching
                ? <View style={{ height: 0, backgroundColor: "rgba(0,0,0,0.3)" }} />
                : banner.map(({ ID, LinkID, Picture }) =>
                    <Banner action={() => navigation.navigate("Search", { LinkID })} name={Picture} key={ID} />)
            }

            {isFetching
                ? <View style={{ height: 0, backgroundColor: "rgba(0,0,0,0.3)" }} />
                : <Gallery items={gallery} />
            }

        </ScrollView>
    )
}


export default Home
