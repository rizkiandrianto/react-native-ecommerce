/**
 * @providesModule screens/Login
 */

import React, { Component } from 'react';
import { Font, LinearGradient } from 'expo';
import { Container, Header, Content, Form, Text, View, Toast } from 'native-base';
import { Image } from 'react-native';
import ButtonWB from 'components/button/ButtonWithBackground';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Input from 'components/form/Input';
import { AsyncStorage } from 'react-native';
import { GetUserDetail } from 'helpers/UserDetail';
import { POST } from 'helpers/Fetch';

export class Main extends React.Component {
    // static navigationOptions = { title: 'Welcome', header: <Header backgroundColor="#4DB6AC"/> };
    static navigationOptions = { title: 'Welcome', header: null };
    constructor() {
      super();
      this.state = {
        fontLoaded: false,
        loadingButton: false,
        form: {
          email: '',
          password: ''
        }
      };
      this.onSubmit = this.onSubmit.bind(this);
      this.changeForm = this.changeForm.bind(this);
    }
    async componentDidMount() {
      await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
      });
  
      this.setState({ fontLoaded: true });
      Toast.show({
        text: GetUserDetail(),
        position: 'bottom',
        duration: 3000
      });
    }
    changeForm(type) {
      return (value) => {
        this.setState({
          form: {
            ...this.state.form,
            [type]: value
          }
        });
      };
    }
    onSubmit() {
      const { email, password } = this.state.form;
      this.setState({
        loadingButton: true
      });
      if (email == '' || password == '') {
        Toast.show({
          text: 'Email or Password can\'t be blank',
          position: 'bottom',
          type: 'danger',
          duration: 3000
        });
        this.setState({
          loadingButton: false
        });
      } else {
        // Post function
        POST({
          url: 'users/authenticate',
          body: {
            email,
            password
          }
        }, (err, res)=>{
          if (err) {
            Toast.show({
              text: 'Error ! Please Try Again !',
              position: 'bottom',
              type: 'danger',
              duration: 3000
            });
          } else {
            this.setState({
              loadingButton: false
            });
            if (res.errors) {
              if (res.errors[0].code == '404' && res.errors[0].message == 'Email and password don\'t match.') {
                Toast.show({
                  text: res.errors[0].message,
                  position: 'bottom',
                  type: 'danger',
                  duration: 3000
                });
              }
            } else {
              AsyncStorage.setItem('login', JSON.stringify(res.data));
              const { navigate } = this.props.navigation;
              navigate('MainScreen');
            }
          }
        });
      }
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
                      <Row>
                        <Image resizeMode="contain" style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}} source={require('../../assets/images/logo2_.png')}/>
                      </Row>
                      <Row style={{marginTop: -50}}>
                        <Col> 
                          <Input label="Username/Email" color="white" onChangeText={this.changeForm('email')}/>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Input secureTextEntry label="Password" color="white" onChangeText={this.changeForm('password')}/>
                        </Col>
                      </Row>
                      <Row style={{marginTop: 30}}>
                        <Col>
                          <ButtonWB light center full text="Login" loading={this.state.loadingButton} onPress={this.onSubmit}/>
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