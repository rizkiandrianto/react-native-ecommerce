/**
* @providesModule screens/ProductDetail
*/

import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import { Container, Content, Header } from 'native-base';
import { Col, Grid, Row } from 'react-native-easy-grid';
import ImageSlider from 'components/list/ImageSliderList';
import { screenWidth } from 'helpers/Config';

class ProductDetail extends Component {
    static navigationOptions = { header: null };
    constructor() {
        super();
        this.state = {
            scroll: new Animated.Value(0),
            data: {
                images: []
            },
            dummyData: {
                images: [
                    'http://placeimg.com/640/480/any',
                    'http://placeimg.com/640/480/any',
                    'http://placeimg.com/640/480/any'
                ]
            }
        };
        this.scroll = new Animated.Value(0);
        this.scrollHandler = this.scrollHandler.bind(this);
    }
    // componentDidUpdate() {
    //     console.log(this.state);
    // }
    componentDidMount() {
        const { params } = this.props.navigation.state;
        this.setState({
            data: params
        });
    }
    scrollHandler(e) {
        var headerOpacity = this.scroll.interpolate({
            inputRange: [ -1, 0, 125, 250, 251],
            outputRange: [0, 0, 0.5, 1, 1]
        });
        console.log('====== Header Opacity: ', headerOpacity, 'Y Offset :', e.nativeEvent.contentOffset.y);
    }
    render() {
        // const { data } = this.state;
        const data = this.state.dummyData;
        const styles = {
            slide1: {
                width: '100%',
                height: 300
            }
        };
        var headerOpacity = this.scroll.interpolate({
            inputRange: [ -1, 0, 125, 250, 251],
            outputRange: [0, 0, 0.5, 1, 1]
        });

        const style = {
            headerWrapper: {
                height: 60, 
                width: '100%', 
                opacity: headerOpacity, 
                position: 'absolute', 
                top: 0, 
                zIndex: 2
            }
        }
        return (
            <Container>
                <Animated.View style={style.headerWrapper}>
                    <Header noShadow/>
                </Animated.View>
                <Content scrollEventThrottle={5} 
                    onScroll={Animated.event(
                        [{ 
                            nativeEvent: {
                                contentOffset: {
                                    y: this.scroll
                                }
                            }
                        }],
                        { listener: this.scrollHandler },
                        {
                            useNativeDriver: true // <- Native Driver used for animated events
                        }
                    )}>
                    <View style={{...styles.slide1}}>
                        <ImageSlider />
                    </View>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                    <Text>Test</Text>
                </Content>
            </Container>
        );
    }
}

export default ProductDetail;