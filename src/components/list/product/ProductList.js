/**
* @providesModule components/list/product/ProductList
*/

import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import ProductItem from 'components/list/product/ProductItem';
import ProductItemPlaceholder from 'components/list/product/ProductItemPlaceholder';
import { Col, Row, Grid } from 'react-native-easy-grid';

Array.range = function(n) {
    // Array.range(5) --> [0,1,2,3,4]
    return Array.apply(null,Array(n)).map((x,i) => i)
};

Object.defineProperty(Array.prototype, 'chunk', {
    value: function(n) {
        // ACTUAL CODE FOR CHUNKING ARRAY:
        return Array.range(Math.ceil(this.length/n)).map((x,i) => this.slice(i*n,i*n+n));
    }
});

class ProductList extends Component {
    renderNoItem() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <View style={{width: '100%', height: 400}}>
                    <Image
                        resizeMode="contain"
                        style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}} 
                        source={require('../../../../assets/images/sorry.png')}/>
                </View>
                <View style={{width: '100%', height: 50}} >
                    <Text 
                    style={{width: '100%', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>No Products Found</Text>
                </View>
            </View>
        )
       return (
            <Grid>
                <View style={{flexDirection: 'row', backgroundColor: 'red', width: '100%'}}>
                    
                </View>
                <View style={{flexDirection: 'column', backgroundColor: 'green'}}>
                    
                </View>
            </Grid>
       );
    }
    renderPlaceholder() {
        return (
            <Grid>
                <Row>
                    <Col><ProductItemPlaceholder /></Col>
                    <Col><ProductItemPlaceholder /></Col>
                </Row>
                <Row>
                    <Col><ProductItemPlaceholder /></Col>
                    <Col><ProductItemPlaceholder /></Col>
                </Row>
            </Grid>
        ) 
    }
    renderProduct() {
        const PRODUCT_PER_PAGE = 2;
        const separator = Array.range(this.props.data.length).chunk(PRODUCT_PER_PAGE);
        const { navigate } = this.props.navigation;
        renderColumn = (key) => {
            return key.map((x, y)=>{
                const data = this.props.data[x];
                const props = {
                    title: data.name,
                    image: data.images[0],
                    price: data.display_price,
                    stock: data.stock_status,
                    key: data.id,
                    navigate,
                    data 
                };
                return (
                    <Col key={props.key}>
                        <ProductItem {...props}/>
                    </Col>
                );
            });
        };
        return separator.map((key, index)=>{
            if (key.length == PRODUCT_PER_PAGE) {
                return (
                    <Row key={index}>
                        {renderColumn(key)} 
                    </Row>
                );
            }
            return (
                <Row key={index}>
                    {renderColumn(key)} 
                    <Col />
                </Row>
            );
        });

    }
    finalRender() {
        if (this.props.loading) {
            return this.renderPlaceholder();
        } else if (this.props.loading == false && this.props.data.length == 0) {
            return this.renderNoItem();
        }
        return this.renderProduct();
    }
    render() {
        return (
            <Grid>
                {this.finalRender()}
            </Grid>
        );
    }
}

export default ProductList;