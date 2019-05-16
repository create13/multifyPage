// let md5 = require('md5');
import md5 from 'md5';
const md5Encode = (config ?:any) => {
    return md5(config);
}

export default {
    md5Encode
}