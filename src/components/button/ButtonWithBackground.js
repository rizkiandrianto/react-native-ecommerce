/**
 * @providesModule components/button/ButtonWithBackground
 */

import React, { Component } from 'react';
import { Button, Text, Spinner } from 'native-base';
import { StyleSheet } from 'react-native';
import PropsExtractor from 'helpers/PropsExtractor';

let style = {
    btnFull: {
        width: '100%',
    }
};

class ButtonWithBackground extends Component {
    render() {
        let styles = {}, text_styles = {};
        const props = PropsExtractor(this.props, ['full', 'text', 'loading']);

        if (props.all.full) {
            styles = {...styles, ...style.btnFull};
            text_styles = {...text_styles, width: '100%'};
        };
        if (props.all.loading) {
            styles = {...styles, width: 50};
        }
        if (props.all.center) {
            styles = {...styles, marginLeft: 'auto', marginRight: 'auto'}
        }
        styles = StyleSheet.create({
            all: {
                ...styles,
                borderRadius: 20
            },
            text: {
                textAlign: 'center',
                ...text_styles
            }
        });
        return (
            <Button androidRippleColor="transparent" rounded {...props.filtered} style={styles.all}>
                {props.all.loading ? <Spinner style={{marginRight: 'auto', marginLeft: 'auto'}} color="white"/> : <Text style={styles.text}>{props.all.text || ''}</Text>}
            </Button>
        );
    }
}

export default ButtonWithBackground;