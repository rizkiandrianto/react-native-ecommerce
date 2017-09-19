/**
 * @providesModule screens/Login
 */

import React, { Component } from 'react';
import { Font, LinearGradient } from 'expo';
import { Container, Header, Content, Form, Text, View } from 'native-base';
import { Image } from 'react-native';
import ButtonWB from 'components/button/ButtonWithBackground';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Input from 'components/form/Input';

export class Main extends React.Component {
    static navigationOptions = { title: 'Welcome', header: <Header backgroundColor="#4DB6AC"/> };
    constructor() {
      super();
      this.state = {
        fontLoaded: false,
        loadingButton: false
      };
      this.loadingButton = this.loadingButton.bind(this);
    }
    async componentDidMount() {
      await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
      });
  
      this.setState({ fontLoaded: true });
    }
    loadingButton(e) {
      this.setState({
        loadingButton: !this.state.loadingButton
      });
    }
    render() {
      if (this.state.fontLoaded) {
        return (
          <Container>
            <Image source={require('../../assets/images/building.png')} style={{opacity: 0.7, width: '100%', height: '100%'}}>
              <LinearGradient colors={['#26A69A', '#009688', '#00897B']} style={{height: '100%'}}>
                <Content>
                  <Form>
                    <Grid style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                      <Row style={{marginTop: -30}}>
                        <Image resizeMode="contain" style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}} source={require('../../assets/images/logo2_.png')}/>
                      </Row>
                      <Row style={{marginTop: -60}}>
                        <Col>
                          <Input label="Username/Email" color="white"/>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Input secureTextEntry label="Password" color="white"/>
                        </Col>
                      </Row>
                      <Row style={{marginTop: 30}}>
                        <Col>
                          <ButtonWB light center full text="Login" loading={this.state.loadingButton} onPress={this.loadingButton}/>
                        </Col>
                      </Row>
                    </Grid>
                    <View style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    </View>
                  </Form>
                </Content>
              </LinearGradient>
            </Image>
          </Container>
        );
      }
      return null;
    }
}

export default Main;