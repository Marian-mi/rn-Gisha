import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, Image, useWindowDimensions, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { Axios } from '../../../App';
import ProductContext from '../../ContextProviders/ProductContext';
import Carousel from '../../Fragments/Carousel/Carousel';
import ProductList from '../../Fragments/ProductList/ProductList';
import { BoxStyles, Colors, Flex } from '../../Styles/Index';
import ProductPageHeader from './Header';
import RenderHtml from 'react-native-render-html'
import DotsLoader from '../../Fragments/Loaders/DotsLoader';

const ProductPage = ({ route }) => {
    const { product, setProducts, isFetching } = useContext(ProductContext);

    const { ID } = route.params

    const { width } = useWindowDimensions();
    const [scrollY, setScrollY] = useState(0)

    useLayoutEffect(() => {
        setProducts((ps) => ({ ...ps, isFetching: true }))
    }, [])

    useEffect(() => {
        ; (async () => {
            try {
                const response = await Axios.post("/product/getdetails", { ProductID: ID })
                const data = await response.data

                setProducts({ product: data, isFetching: false })
            }
            catch (err) {
                console.log(err)
            }
        })();
    }, [])

    if (isFetching) return <DotsLoader /> 

    const renderItem = item => {
        return (
            <PureView key={item.Path} style={{ width: width }}>
                <Image source={{ uri: "http://192.168.1.104:8182" + item.Path, width: width, height: width }} />
            </PureView>
        );
    };


    return (
        <ScrollView onScroll={(e) => setScrollY(e.nativeEvent.contentOffset.y)} stickyHeaderIndices={[0]}>
            <ProductPageHeader title={"عنوان مورد نظر محصول در این قسمت نمایش داده میشود"} scrollY={scrollY} />
            <View style={{ position: "relative", zIndex: 0 }}>
                <Carousel data={product.ProductImages.BigGallery ?? product.ProductImages} renderer={renderItem} keyExtractor={(item) => item.Path} />
                <Title title={product.Title.Main} />
                <View style={{ padding: 20 }}>
                    <Buttons />
                    <View style={Styles.Details}>
                        <View style={Styles.Description}>
                            <RenderHtml
                                style
                                source={{ html: product.Description }}
                                contentWidth={300}
                            />
                        </View>
                        <Text style={Styles.Price}>{product?.Prices?.NewPrice ?? "----"} {product?.Prices?.PriceUnit}</Text>
                        <Text style={Styles.Score}>با خرید این کالا ۴۰ عدد گیشانتیون دریافت میکنید</Text>

                        <View style={Styles.AddtoCart}>
                            <Icon name="cart-plus" size={32} color={'white'} />
                            <Text style={{ marginStart: 20, color: 'white', fontSize: 22 }}>افزودن به سبد خرید</Text>
                        </View>
                    </View>
                </View>

                <ProductList
                    products={product.SimilarProducts}
                    title={"محصولات مشابه"}
                />
                <ProductList
                    products={product.RelatedProducts}
                    title={"محصولات مرتبط"}
                />
            </View>
        </ScrollView>
    );
};

export const PureView = React.memo(({ children }) => <View>{children}</View>);

const Title = ({ title }) => (
    <View style={[Styles.Title]}>
        <View style={[Flex.Row, { justifyContent: 'flex-end' }]}>
            <Icon name="heart" size={26} color={Colors.Grey} style={{ marginEnd: 15 }} />
            <Icon name="share-variant" size={26} color={Colors.Grey} />
        </View>
        <Text style={Styles.TitleText}>{title}</Text>
    </View>
);

const Buttons = () => (
    <View style={Flex.Row}>
        <Pressable style={Styles.Button}>
            <Icon name="comment-multiple" size={22} color={Colors.Grey} />
            <Text style={{ flex: 1, textAlign: 'center', fontWeight: '600' }}>نظرات کاربران</Text>
        </Pressable>
        <View style={{ flex: 1 }} />
        <Pressable style={Styles.Button}>
            <Icon name="clipboard-text-outline" size={26} color={Colors.Grey} />
            <Text style={{ flex: 1, textAlign: 'center', fontWeight: '600' }}>مشخصات</Text>
        </Pressable>
    </View>
);

const Styles = StyleSheet.create({
    Title: {
        padding: 15,
        backgroundColor: '#fafafa',
        ...BoxStyles.Shadow,
    },
    TitleText: {
        fontSize: 20,
        fontWeight: '600',
        paddingHorizontal: 10,
        paddingTop: 15,
        paddingBottom: 35,
    },
    Button: {
        flex: 4,
        ...Flex.Row,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        padding: 8,
        paddingHorizontal: 25,
        backgroundColor: 'white',
        ...BoxStyles.Shadow,
    },
    Details: { backgroundColor: 'white', marginTop: 20, padding: 20, ...BoxStyles.Shadow, borderRadius: 4 },
    Price: {
        color: Colors.Green,
        textAlign: 'right',
        fontWeight: '600',
        fontSize: 22,
    },
    Score: {
        backgroundColor: Colors.Primary,
        paddingVertical: 8,
        marginVertical: 20,
        color: 'white',
        textAlign: 'center',
    },
    AddtoCart: {
        backgroundColor: Colors.Green,
        paddingVertical: 15,
        ...Flex.Row,
        ...Flex.Centered,
    },
    Description: {
        lineHeight: 24,
        paddingVertical: 30,
        borderTopColor: "#ededed",
        borderTopWidth: 1
    },
});

export default ProductPage;
