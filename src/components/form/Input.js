/**
 * @providesModule components/form/Input
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Label, Item, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import PropsExtractor from 'helpers/PropsExtractor';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || '',
            color: props.color || 'black'
        };
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(value) {
        this.setState({
            value: value
        });
        this.props.onChangeText && this.props.onChangeText(value);
    }
    render() {
        const { color } = this.state;
        const props = PropsExtractor(this.props, ['label', 'value', 'onChange', 'error', 'message', 'success']);
        const styles = StyleSheet.create({
            message: {
                fontSize: 12,
                color: props.all.error ? 'red' : (props.success ? 'green' : color)
            }
        });
        let root_props = {};
        if (props.all.error) root_props.error = true;
        return (
            <Col>
                <Item stackedLabel style={{marginLeft: 0}} {...root_props}>
                    <Label style={{color: color}}>{props.all.label || ''}</Label>
                    <Input {...props.filtered} style={{color: color, ...props.filtered.style}} onChangeText={this.changeHandler} value={this.state.value} />
                </Item>
                <Text style={styles.message}>{props.all.error || props.all.success || props.all.message}</Text>
            </Col>
        );
    }
}

export default InputForm;