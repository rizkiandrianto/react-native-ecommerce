/**
 * @providesModule screens/Main
 */

import React, { Component } from 'react';
import { Text, Button } from 'native-base';
import { View, AsyncStorage } from 'react-native';
import ButtonWB from 'components/button/ButtonWithBackground';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setIncreaseCounter } from 'redux/actions/MainAction';

class Main extends Component {
    constructor() {
        super();
        this.getItem = this.getItem.bind(this);
        this.setItem = this.setItem.bind(this);
        this.setCounter = this.setCounter.bind(this);
    }
    setCounter() {
        this.props.setIncreaseCounter();
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

                <ButtonWB light center full text={"Counter : " + this.props.counter} onPress={this.setCounter}/>
            </View>
        );
    }
}

export default connect(
    state => ({
        counter: state.Main.counter
    }),
    dispatch => bindActionCreators({
       setIncreaseCounter 
    }, dispatch)
)(Main);