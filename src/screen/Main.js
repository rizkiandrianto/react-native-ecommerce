/**
 * @providesModule screen/Main
 */

import React, { Component } from 'react';
import { Font, KeepAwake } from 'expo';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export class Main extends React.Component {
    static navigationOptions = { title: 'Welcome', header: <Header /> };
    constructor() {
      super();
      this.state = {
        fontLoaded: false
      };
      KeepAwake.activate();
    }
    async componentDidMount() {
      await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
      });
  
      this.setState({ fontLoaded: true });
    }
    render() {
      if (this.state.fontLoaded) {
        return (
          <Container>
            <Content>
              <Form>
                <Item stackedLabel>
                  <Label>Username / Email</Label>
                  <Input />
                </Item>
                <Item stackedLabel last>
                  <Label>Password</Label>
                  <Input secureTextEntry />
                </Item>
              </Form>
            </Content>
          </Container>
        );
      }
      return null;
    }
}

export default Main;