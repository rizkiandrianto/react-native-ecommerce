/**
* @providesModule screens/Main
*/

import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import Header from 'components/header/HeaderWithSearch';
import { GET } from 'helpers/Fetch';
import ProductList from 'components/list/product/ProductList';

class Main extends Component {
    static navigationOptions = { header: null };
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true
        };
        this.submitSearch = this.submitSearch.bind(this);
    }
    componentDidMount() {
        this.call_data();
    }
    submitSearch(value) {
        this.call_data(value);
    }
    renderItem() {
        return this.state.data.map((key, index)=>{
            return <Text key={index}>{key.name}</Text>
        });
    }
    call_data(param) {
        this.setState({
            loading: true
        });
        let config = {
            url: 'products'
        };
        if (param) config.query = {q: param};
        GET({
            ...config
        }, (err, res) => {
            if (!err) {
                this.setState({
                    ...this.state,
                    ...res,
                    loading: false
                });
            }
        });
    }
    render() {
        return (
            <Container>
                <Header onSubmitEditing={this.submitSearch}/>
                <Content>
                    <ProductList loading={this.state.loading} data={this.state.data}/>
                </Content>
            </Container>
        );
    }
}

export default Main;