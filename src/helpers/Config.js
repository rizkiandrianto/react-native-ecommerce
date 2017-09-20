/**
 * @providesModule helpers/Config
 */

const public_key = 'bea139b1-aa33-4b7b-ba5b-dbb44fe01fbf';
const secret_key = 'qS8KXAmINqDb90/KhjAHYpWYh99vn4UvW14ao2sRFV8=';
export default {
    api_url: 'https://api.marketcloud.it/v0/',
    public_key,
    secret_key,
    default_headers: {
        'authorization': public_key,
        'accept': "application/json",
        'content-type': "application/json"
    }
};