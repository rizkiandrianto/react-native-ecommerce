/**
 * @providesModule screens/Main
 */

import React, { Component } from 'react';
import { Text, Button } from 'native-base';
import { View, AsyncStorage } from 'react-native';
import ButtonWB from 'components/button/ButtonWithBackground';

class Main extends Component {
    constructor() {
        super();
        this.getItem = this.getItem.bind(this);
        this.setItem = this.setItem.bind(this);
    }
    getItem() {
        AsyncStorage.getItem("login").then((value) => {
            console.log(value);
        }).done();
    }
    setItem() {
        AsyncStorage.setItem("login", "=== TOKEN ===");
    }
    render() {
        return (
            <View>
                <Button onPress={()=>{Expo.Util.reload()}}><Text>Reload</Text></Button>
                <Button onPress={()=>{AsyncStorage.clear(()=>{
                    console.log('TEST');
                    })}}><Text>Clear Async Storage</Text></Button>

                <ButtonWB light center full text="Get Login" onPress={this.getItem}/>
                <ButtonWB light center full text="Set Login" onPress={this.setItem}/>
                <ButtonWB light center full text="Reload App" onPress={()=>{Expo.Util.reload()}}/>
            </View>
        );
    }
}

export default Main;