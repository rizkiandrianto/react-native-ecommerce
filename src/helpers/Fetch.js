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
    .catch((err)=>{callback && callback(err, false)});
}