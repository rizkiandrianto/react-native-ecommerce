/**
* @providesModule components/list/product/ProductItemPlaceholder
*/
import React from 'react';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import ShimmerPlaceholder from 'components/others/ShimmerPlaceholder';

const style = StyleSheet.create({
    thumbnail: {
        height: 200, width: '100%', flex: 1
    },
    thumbnailWrapper: {
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 1,
        width: '100%',
        height: 200
    },
    textPlaceholder: {width: '100%', marginLeft: 'auto', marginRight: 'auto'}
});

function ProductItem({image, title, price, stock}) {
    return (
        <Card>
            <CardItem cardBody>
                <ShimmerPlaceholder autoRun={true} style={style.thumbnailWrapper}/>
            </CardItem>
            <CardItem>
                <ShimmerPlaceholder autoRun={true} style={style.textPlaceholder} />
            </CardItem>
            <CardItem style={{paddingTop: 0}}>
                <ShimmerPlaceholder autoRun={true} style={style.textPlaceholder} />
            </CardItem>
        </Card>
    );
}

export default ProductItem;