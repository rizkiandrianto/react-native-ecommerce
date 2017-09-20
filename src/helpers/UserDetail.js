/**
 * @providesModule helpers/UserDetail
 */

import { AsyncStorage } from 'react-native';

export function GetUserDetail() {
    AsyncStorage.getItem('login', (err, res)=>{
        return res;
    });
}