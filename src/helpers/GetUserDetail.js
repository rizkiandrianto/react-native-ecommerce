/**
* @providesModule helpers/GetUserDetail
*/

import { AsyncStorage } from 'react-native';

export default function(callback) {
    AsyncStorage.getItem("login").then((value) => {
        callback && callback(false, JSON.parse(value));
    }).catch((err)=>{
        callback && callback(err, false);
    }).done();
}