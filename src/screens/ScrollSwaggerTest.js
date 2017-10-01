/**
* @providesModule screens/ScrollSwaggerTest
*/

import React, { Component } from "react";
import {
  Animated,
  View,
  ListView,
  ScrollView,
  Text,
  Dimensions
} from "react-native";
const { height, width } = Dimensions.get("window");

export default class ScrollSwagger extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
        scrollY: new Animated.Value(0),
        dataSource: ds.cloneWithRows([
            "Dummy",
            "data",
            "Dummy",
            "data",
            "Dummy",
            "data",
            "Dummy",
            "data",
            "Dummy",
            "data",
            "Dummy",
            "data"
        ])
        };
    }
    renderRow(rowData) {
        return (
        <View
            style={{
            width: width,
            height: 60,
            borderWidth: 1,
            marginVertical: 10,
            justifyContent: "center",
            alignItems: "center"
            }}
        >
            <Text>{rowData}</Text>
        </View>
        );
    }
    _handleScroll(e) {
        var headMov = this.state.scrollY.interpolate({
            inputRange: [0, 180, 181],
            outputRange: [0, -180, -180]
        });
        var imgOp = this.state.scrollY.interpolate({
        inputRange: [0, 180, 181],
        outputRange: [1, 0, 0]
        });
        var headColor = this.state.scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: ["green", "blue"]
        });
        console.log(headMov);
    }
    renderScroll(props) {
        return (
        <Animated.ScrollView
            {...props}
            scrollEventThrottle={16}
            contentContainerStyle={{
            paddingTop: 250
            }}
            // Declarative API for animations ->
            onScroll={Animated.event(
            [
                {
                nativeEvent: { contentOffset: { y: this.state.scrollY } }
                }
            ],
            { listener: this._handleScroll.bind(this) },
            {
                useNativeDriver: true // <- Native Driver used for animated events
            }
            )}
        />
        );
    }
    render() {
        var headMov = this.state.scrollY.interpolate({
            inputRange: [0, 180, 181],
            outputRange: [0, -180, -180]
        });
        var imgOp = this.state.scrollY.interpolate({
        inputRange: [0, 180, 181],
        outputRange: [1, 0, 0]
        });
        var headColor = this.state.scrollY.interpolate({
            inputRange: [0, 100],
            outputRange: ["green", "blue"]
        });
        
        return (
        <View style={{ flex: 1}}>
            <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            renderScrollComponent={this.renderScroll.bind(this)}
            />
            <Animated.View
            style={{
                position: "absolute",
                height: 250,
                width: width,
                top: 0,
                backgroundColor: headColor,
                justifyContent: "flex-end",
                flexDirection: "column",
                transform: [{ translateY: headMov }]
            }}
            >
            <Animated.Image
                source={{
                uri: "https://images.alphacoders.com/371/thumb-1920-371.jpg"
                }}
                style={{ bottom: 0, width: width, height: 250, opacity: imgOp }}
            />
            </Animated.View>
        </View>
        );
    }
}