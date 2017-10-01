/**
 * @providesModule screens/Loading
 */

import React, { Component } from 'react';
import { LinearGradient } from 'expo';
import { Container } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import { Grid } from 'react-native-easy-grid';
import { screenHeight } from 'helpers/Config';

const style = StyleSheet.create({
  logo: {
    width: '80%', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    alignItems: 'center',
    marginTop: (10/100) * screenHeight
  },
  logoWrapper: {
    width: '80%', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  backgroundImage: {
    opacity: 0.7, 
    width: '100%', 
    height: '100%',
    backgroundColor: 'black'
  }
})

export function Loading() {
    return (
      <Container>
        <Image source={require('../../assets/images/building.png')} style={style.backgroundImage}>
          <LinearGradient colors={['#26A69A', '#009688', '#00897B']} style={{height: '100%'}}>
            <Grid style={style.logoWrapper}>
              <Image resizeMode="contain" style={style.logo} source={require('../../assets/images/logo_white.png')}/>
            </Grid>
          </LinearGradient>
        </Image>
      </Container>
    );
}

Loading.navigationOptions = { title: 'Welcome', header: null };

export default Loading;