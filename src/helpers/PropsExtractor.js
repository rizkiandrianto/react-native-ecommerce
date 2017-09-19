/**
 * @providesModule helpers/PropsExtractor
 */

export default function(props = {}, resticted = []) {
    let filtered_props = {};
    let restricted = [...restricted];
    props && Object.keys(props).map((key, index)=>{
        if (restricted && restricted.indexOf(key) == -1) filtered_props[key] = props[key];
    });
    return {
        all: {...props},
        filtered: filtered_props
    }
}