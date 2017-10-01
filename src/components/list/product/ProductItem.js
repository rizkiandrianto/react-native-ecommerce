/**
* @providesModule components/list/product/ProductItem
*/
import React from 'react';
import { Card, CardItem, Text, Body } from 'native-base';
import { Image, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const style = StyleSheet.create({
    thumbnail: {
        height: 200, width: null, flex: 1
    },
    thumbnailWrapper: {
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 1,
    }
});

function ProductItem({image, title, price, stock, navigate, data}) {
    const onClick = () => {
        navigate('ProductDetail', {
            ...data
        });
    };

    return (
        <TouchableOpacity onPress={()=>{onClick()}}>
            <Card button onPress={()=>{console.log('Sempak')}}>
                <CardItem cardBody style={style.thumbnailWrapper}>
                    <Image source={{uri: image}} style={style.thumbnail}/>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text ellipsizeMode="tail">{title}</Text>
                        <Text ellipsizeMode="tail">{price}</Text>
                    </Body>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
}

export default ProductItem;