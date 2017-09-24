/**
 * @providesModule helpers/Fetch
 */

import Config from 'helpers/Config';

export function POST(param, callback) {
    fetch(Config.api_url + param.url, {
        method: 'POST',
        headers: {
            ...Config.default_headers,
            ...param.headers
        },
        body: JSON.stringify(param.body)
    })
    .then((response) => response.json())
    .then((res) => {callback && callback(false, res)})
    .catch((err)=>{
        console.error(err);
        callback && callback(err, false)
    });
}

export function GET(param, callback) {
    let url = Config.api_url + param.url;
    if (param.query) url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(param.query);
    fetch(url, {
        method: 'GET',
        headers: {
            ...Config.default_headers,
            ...param.headers
        }
    })
    .then((response) => response.json())
    .then((res) => {callback && callback(false, res)})
    .catch((err)=>{
        console.error(err);
        callback && callback(err, false)
    });
}

function queryParams(params) {
    return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}