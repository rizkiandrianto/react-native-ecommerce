/**
* @providesModule components/header/HeaderWithSearch
*/

import React, { Component } from 'react';
import { Header, Item, Input, Icon, Button, Text } from 'native-base';
import Static from 'helpers/StaticStyle';

class HeaderWithSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchText: ''
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    submitHandler() {
        this.props.onSubmitEditing && this.props.onSubmitEditing(this.state.searchText);
    }
    changeHandler(text) {
        this.setState({searchText: text});
        this.props.onChangeText && this.props.onChangeText(text)
    }
    render() {
        return (
            <Header searchBar rounded style={{height: Static.HEADER_WITH_SEARCH_HEIGHT}}>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" 
                        value={this.state.searchText} 
                        onChangeText={this.changeHandler} 
                        onSubmitEditing={this.submitHandler} />
                </Item>
                {/* <Button transparent>
                    <Text>Search</Text>
                </Button> */}
            </Header>
        );
    }
}

export default HeaderWithSearch;